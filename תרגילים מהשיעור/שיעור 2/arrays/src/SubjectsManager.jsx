export default function SubjectsManager(){
    const subjects = {
        'Tech': ['React', 'Node.js', 'C#', 'Java', 'C'],
        'Grafika': ['Photoshop', 'Elustrator', 'Premier'],
        'Adrichalut': ['Chomrey Bnia', 'Sirtut']
    }
    

    return <>
    <ul>
        { Object.keys(subjects).map((s, i) => <li key={ i }>{ s }: { subjects[s].join(', ') }</li>) }
    </ul>
        
    </>
}