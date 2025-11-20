// SubjectManager.jsx
export default function SubjectManager() {
    const subjects = {
      tech: ["react", "python"],
      math: ["aa", "bbb"],
    };
  
    return (
      <>
        <ul>
          {Object.keys(subjects).map((subjectName) => (
            <li key={subjectName}>
              {subjectName}: {subjects[subjectName].join(", ")}
            </li>
          ))}
        </ul>
      </>
    );
  }
  