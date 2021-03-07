import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 2048)
          onFileSelectError({ error: "Din fil kan inte vara större än 2MB" });
        else onFileSelectSuccess(file);
      };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="button" />
        </div>
    )
}

export default FileUploader;