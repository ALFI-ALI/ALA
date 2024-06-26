let courses = [ 
    { 
        CourseId: "PROG100", 
        Title: "Introduction to HTML/CSS/Git", 
        Location: "Classroom 7", 
        StartDate: "09/08/22", 
        Fee: "100.00", 
    }, 
    { 
        CourseId: "PROG200", 
        Title: "Introduction to JavaScript", 
        Location: "Classroom 9", 
        StartDate: "11/22/22", 
        Fee: "350.00", 
    }, 
    { 
        CourseId: "PROG300", 
        Title: "Introduction to Java", 
        Location: "Classroom 1", 
        StartDate: "01/09/23", 
        Fee: "50.00", 
    }, 
    { 
        CourseId: "PROG400", 
        Title: "Introduction to SQL and Databases", 
        Location: "Classroom 7", 
        StartDate: "03/16/23", 
        Fee: "50.00", 
    }, 
    {
        CourseId: "PROJ500", 
        Title: "Introduction to Angular", 
        Location: "Classroom 1", 
        StartDate: "04/25/23", 
        Fee: "50.00", 
    } 
]; 

 //  When does the PROG200 course start? 

 function display() {
    let PROG200CourseStart =courses.find(StartDate[0]);
    console.log(PROG200CourseStart);
 }
 display();


 /////
 {
    Course: "IAWS",
    CourseCode: "AI-101",
    CourseDescription: "Amazon Web Services ",
    Product: "amazin",
    Role: "cloud",
    Level: "Beginner",
    Duration: "3 months",
    Price: "49.99",
    CourseURL: "https://aws.amazon.com/free/",
    CourseImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvOCHeqNEMvlfFJGfKoCQvZlwwgFDEo1D43M_yqLGrw&s";}