const dictionary = {
    "zwierzęta":{
        name: "zwierzęta",
        entry: [
            {english: "cat", polish: "kot"},
            {english: "dog", polish: "pies"},
            {english: "bird", polish: "ptak"},
            {english: "fish", polish: "ryba"},
            {english: "hamster", polish: "chomik"}
        ]
    },
    "kolory":{
        name: "kolory",
        entry: [
            {english: "red", polish: "czerwony"},
            {english: "blue", polish: "niebieski"},
            {english: "green", polish: "zielony"},
            {english: "yellow", polish: "żółty"},
            {english: "black", polish: "czarny"}
        ]
    },
    "jedzenie":{
        name: "jedzenie",
        entry: [
            {english: "bread", polish: "chleb"},
            {english: "milk", polish: "mleko"},
            {english: "cheese", polish: "ser"},
            {english: "apple", polish: "jabłko"},
            {english: "banana", polish: "banan"}
        ]
    }
  };

export const getSubjects = () =>{
    return Object.keys(dictionary);
}

export const getSubjectData = (subject) =>{
    if(hasSubject(subject)){
        return { id: subject, ...dictionary[subject] };
    }
    return null;
}

export const hasSubject = (subject) =>{
  return dictionary.hasOwnProperty(subject);
}

export default dictionary;