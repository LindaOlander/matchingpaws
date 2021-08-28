import ReactGA from "react-ga";

export const initGA = () => {           
  ReactGA.initialize('UA-199808031-1'); 
}

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}

export const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
  });
};
