export const myProjects = [
  {
    id: 1,
    title: "GenAI-Powered Resume Optimizer",
    description: "An AI-driven web platform that restructures user CVs based on job descriptions using LLMs and NLP techniques.",
    subDescription: [
      "Built using FastAPI, React, and Python for end-to-end integration.",
      "Implemented semantic search and skill extraction using sentence transformers.",
      "Used web scraping and keyword extraction to align resumes with job postings.",
      "Generated personalized resume versions with OpenAI GPT models."
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/FastAPI.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "OpenAI", path: "/assets/logos/openai.svg" }
    ],
  },
  {
    id: 2,
    title: "RAG-Based Chatbot with Document Attribution",
    description: "An enterprise GenAI assistant that retrieves answers from a document corpus and displays source references.",
    subDescription: [
      "Built a RAG pipeline using LangChain, Pinecone, and OpenAI.",
      "Designed a React-based UI with clickable references for every answer.",
      "Integrated PDF/document parsing and chunking with metadata preservation.",
      "Consulted with clients on UX and enterprise document integration strategies."
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/FastAPI.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "OpenAI", path: "/assets/logos/openai.svg" }
    ],
  },
  {
    
      id: 3,
      title: "CROHME Handwritten Math Expression Recognition",
      description:
        "Developed a deep learning pipeline to recognize handwritten mathematical expressions using image processing, data augmentation, and CNN-based classification, trained on the CROHME dataset.",
      subDescription: [
        "Parsed and cleaned CROHME caption files and BMP images, generating structured labels and training metadata.",
        "Applied image preprocessing techniques including resizing, Gaussian blur, and normalization. Augmented data using `imgaug` with elastic transformations and affine shifts.",
        "Built a custom PyTorch classifier using CNN layers with batch normalization and dropout. Trained over 100 epochs with CrossEntropyLoss.",
        "Achieved accurate character classification and laid groundwork for encoder-decoder sequence modeling using Swin Transformer as visual encoder and Transformer decoder for symbol generation.",
      ],
      href: "",  // optional GitHub/Colab link
      logo: "",  // Add image to your assets
      tags: [
        { id: 1, name: "Python", path: "/assets/logos/python.svg" },
        { id: 2, name: "PyTorch", path: "/assets/logos/pytorch.svg" },
        { id: 3, name: "Computer Vision", path: "/assets/logos/opencv.svg" },
        { id: 4, name: "Transformers", path: "/assets/logos/huggingface.svg" },
      ],
  },
    
  {
    id: 4,
    title: "Stock Market Volatility Prediction",
    description:
      "A time-series ML project predicting volatility in major Indian indices (NIFTY50, NIFTYNEXT50, BANKNIFTY) using historical OHLC data.",
    subDescription: [
      "Performed feature engineering with moving averages, volatility bands, and lag variables to capture market behavior.",
      "Built and compared multiple regression models (Random Forest, XGBoost, SVR, Linear, Decision Tree) to predict daily volatility.",
      "Implemented a time-based train-test split to preserve temporal integrity in modeling.",
      "Visualized performance with Actual vs Predicted plots and consolidated metrics into comparison dashboards.",
    ],
    href: "",  // optional GitHub or Colab link
    logo: "",  // put a relevant image in your assets
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Pandas", path: "/assets/logos/Pandas.svg" },
      { id: 3, name: "scikit-learn", path: "/assets/logos/sklearn.svg" },
      { id: 4, name: "Matplotlib", path: "/assets/logos/Matplotlib.svg" }
    ],

  },
];
export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/tiwariPratyush",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ipratyushtiwari",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iampratyushtiwari/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Technology Consultant Intern",
    job: "PwC India",
    date: "June 2025 - Present",
    contents: [
      "Delivering AI and data science solutions to multiple enterprise clients, aligning with business needs and technical feasibility.",
      "Building GenAI-based applications, including RAG systems and intelligent assistants, to enhance decision-making and customer experience.",
      "Working across NLP, ML, and LLM stacks using Python, LangChain, and vector databases like FAISS and Pinecone.",
      "Collaborating with cross-functional teams and presenting findings to stakeholders for iterative feedback and deployment.",
    ],
  },
  {
    title: "Data Science Intern",
    job: "NITI Aayog",
    date: "May 2024 - August 2024",
    contents: [
      "Developed interactive data visualizations using Tableau to present national-scale insights.",
      "Designed executive dashboards in Power BI for real-time KPI tracking and monitoring.",
      "Worked on Python, LangChain, and RAG-based LLM architectures for natural language analysis.",
      "Automated data processing pipelines to improve reporting efficiency and data accuracy.",
    ],
  },
  {
    title: "Machine Learning Intern",
    job: "Ericsson Global India Pvt. Ltd.",
    date: "June 2023 - July 2023",
    contents: [
      "Utilized Jira for project and ticket management to streamline development workflow.",
      "Used Pandas for advanced data preprocessing, analysis, and reporting automation.",
      "Automated team communications using `smtplib` and `win32com`, enhancing coordination.",
      "Improved team productivity and project delivery by integrating Python automation into Jira workflows.",
    ],
  },
  
];

