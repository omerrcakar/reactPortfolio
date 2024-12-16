import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a senior in Software Engineering. I have 1 year of experience with my freelance and internships. I am learning Swift - SwiftUI. I am also learning Python. I am working on machine learning, natural language processing and artificial intelligence. I want to step out of my comfort zone and continue my career development. I am preparing for my graduation project and the WWDC student challenge competition organized by Apple. I am waiting for job offers for my last internship. I am continuing to work on my application to be published in the store.`;


export const EXPERIENCES = [
  {
    year: "2024 - August",
    role: "Volunteer Intern IOS Developer",
    company: "YazılımXYZ",
    description: `Calendar App`,
    technologies: ["SwiftUI", "MVVM", "Firebase", "Alamofire"],
  },
  {
    year: "2024 - July",
    role: "Intern IOS Developer",
    company: "Bimser",
    description: `Bimser BSS Mobile App`,
    technologies: ["SwiftUI", "MVVM", "REST - Alamofire"],
  }
  
];

export const PROJECTS = [
  {
    title: "Bimser Intern Project",
    image: project1,
    description:
      "A SwiftUI application using MVVM. User login , task tracking , filtering and profile management.It communicates with a web service API and features a functional UI design for institutional use.",
    technologies: ["SwiftUI", "MVVM", "REST - Alamofire"],
  },
  {
    title: "YazılımXYZ Intern Project",
    image: project2,
    description:
      "Providing Google calendar features. User role based login, admin dashboard, calendar and messaging.",
    technologies: ["SwiftUI", "MVVM", "Firebase", "Alamofire"],
  },
  {
    title: "University Mobile Project",
    image: project3,
    description:
      "Combination of to do and pomodoro app. With Gemini API .",
    technologies: ["SwiftUI", "MVVM", "Firebase", "Gemini API", "Notification"],
  },
  {
    title: "Market List App",
    image: project4,
    description:
      "It's an app where you can keep notes of what you'll buy when you go grocery shopping. I made this app to practice SwiftData.",
    technologies: ["SwiftUI", "SwiftData", "MVVM"],
  },
];

export const CONTACT = {
  
  email: "omer1cakar@gmail.com",
};
