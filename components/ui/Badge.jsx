import React from "react";

const badges = [
    // Programming Languages
    { label: "C++", color: "00599C", logo: "c%2B%2B" },
    { label: "Python", color: "FFD43B", logo: "python" },

    // Libraries and Frameworks (Machine Learning)
    { label: "TensorFlow", color: "FF6F00", logo: "tensorflow" },
    { label: "Keras", color: "D00000", logo: "Keras" },
    { label: "PyTorch", color: "EE4C2C", logo: "pytorch" },
    { label: "scikit_learn", color: "F7931E", logo: "scikit-learn" },
    { label: "SciPy", color: "654FF0", logo: "SciPy" },

    // Data Manipulation and Visualization
    { label: "Numpy", color: "777BB4", logo: "numpy" },
    { label: "Pandas", color: "2C2D72", logo: "pandas" },
    { label: "Plotly", color: "239120", logo: "plotly" },
    { label: "Streamlit", color: "FF4B4B", logo: "Streamlit" },

    // Frameworks (Web Development)
    { label: "Flask", color: "000000", logo: "flask" },
    { label: "Django", color: "092E20", logo: "django" },

    // Tools and Platforms
    { label: "Docker", color: "2CA5E0", logo: "docker" },
    { label: "Amazon_AWS", color: "FF9900", logo: "amazonaws" },
    { label: "Jupyter", color: "F37626", logo: "Jupyter" },

    // Miscellaneous
    { label: "Linux", color: "FCC624", logo: "linux" },
    { label: "OpenCV", color: "27338e", logo: "OpenCV" },
    { label: "Node js", color: "339933", logo: "nodedotjs" },
    { label: "Nginx", color: "009639", logo: "nginx" },
    { label: "langchain", color: "1C3C3C", logo: "langchain" },
];

const Badge = ({ label, color, logo }) => {
    const badgeUrl = `https://img.shields.io/badge/-${color}?style=for-the-badge&logo=${logo}&logoColor=white`;
    return (
        <div style={{ margin: "5px", display: "inline-block" }}>
            <img src={badgeUrl} alt={`${label} Badge`} width={100} />
        </div>
    );
};

const BadgeList = () => {
    return (
        <div>
            {badges.map((badge, index) => (
                <Badge key={index} {...badge} />
            ))}
        </div>
    );
};

export default BadgeList;
