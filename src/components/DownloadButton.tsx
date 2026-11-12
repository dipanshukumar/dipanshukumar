'use client';

import React from "react";
import Download from "@mui/icons-material/Download";

const DownloadButton: React.FC = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Dipanshu_Kumar_Resume_Nov_13_2026.pdf";
        link.download = "Dipanshu_Resume.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            className="btn btn-primary"
            onClick={downloadResume}
            aria-label="Download Resume"
        >
            <Download sx={{ fontSize: 20 }} />
            Download Resume
        </button>
    );
};

export default DownloadButton;
