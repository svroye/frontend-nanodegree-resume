var work = {
    "jobs" : [
    {
        "employer" : "SOGETI",
        "title": "Test Consultant",
        "location": "Diegem",
        "dates": "April 2017 - ...",
        "description": "Testing of software for clients."
    }
    ]
};

var projects = {
    "project": [
    {
        "title":"Bachelor thesis",
        "dates":"February 2014 - May 2014",
        "description":"Piezo-Electric Materials",
        "images": [ "http://lorempixel.com/400/200/sports", "http://lorempixel.com/400/200/sports"]
    },
    {
        "title":"Master thesis",
        "dates":"February 2016 - July 2016",
        "description":"Study of Second-Order Non-Linearities in Strained Silicon for All-Optical Switching",
        "images":[ "http://lorempixel.com/400/200","http://lorempixel.com/400/200"]
    }
    ]
};

var bio = {
    "name" : "Steven Van Roye",
    "role" : "Web Developer",
    "welcomeMessage":"Hi there everybody !",
    "biopic" : "images/homer.gif",
    "contacts": {
        "mobile":"0493/73.38.22",
        "email":"vanroyesteven@gmail.com",
        "github":"svroye",
        "location":"Ghent, Belgium"
    },
    "skills":["Android", "Java","HTML", "CSS", "JavaScript"]
};

var education = {
    "schools" : [
    {
        "name": "University Ghent",
        "location": "Ghent, Belgium",
        "degree": "Bachelor of Engineering Physics",
        "dates": " September 2011 - July 2014",
        "url": "http://www.ugent.be",
        "majors": ["Engineering","Physics"]
    },
    {
        "name": "University Ghent",
        "location": "Ghent, Belgium",
        "degree": "Master in Photonics Engineering",
        "dates": " September 2014 - September 2016",
        "url": "http://www.ugent.be",
        "majors": ["Engineering","Photonics"]
    },
    {
        "name": "Politecnic University of Valencia (UPV)",
        "location": "Valencia, Spain",
        "degree": "Erasmus Exchange in the Master of Telecommunication Technologies, Systems and Networks",
        "dates": " September 2015 - July 2016",
        "url": "http://www.upv.es",
        "majors": ["Engineering","Telecommunications"]
    }
    ],
    "onlineCourses": [
    {
        "title":"Android Basics Nanodegree",
        "school":"Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }
    ]
};

// add a display function to the work object to show the work array in the HTML document
work.display = function() {
    for(var i=0;i<work.jobs.length;i++){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        var formattedEmployerAndTitle = formattedEmployer + "\t" + formattedTitle;
        $(".work-entry:last").append(formattedEmployerAndTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
    }
};

// add a display function to the projects object to show the projects array in the HTML document
projects.display = function(){
    for(var i=0;i<projects.project.length;i++){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[i].description));
        for(var j=0;j<projects.project[i].images.length;j++){
            $(".project-entry:last").append(HTMLprojectImage.replace
                ("%data%",projects.project[i].images[j]));
        }
    }
};

// add a display function to the bio object to show the bio array in the HTML document
bio.display = function(){
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    if(bio.skills.length > 0){
     $("#header").append(HTMLskillsStart);
     for(var i=0;i<bio.skills.length;i++){
        var formattedSkill =HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkill);
        }
}
$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
}

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%",school.name);
        schoolName = schoolName.replace("#",school.url);
        $(".education-entry:last").append( schoolName+ HTMLschoolDegree.replace("%data%",school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",school.majors));
    });
    if(education.onlineCourses.length >0){
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",course.title)+HTMLonlineSchool.replace("%data%",course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%",course.dates));
            var urlVar = HTMLonlineURL.replace("%data%",course.url);
            urlVar = urlVar.replace("#",course.url);
            $(".education-entry:last").append(urlVar);
        })
    }

}


function inName(fullName){
    var arrayName = fullName.split(" ");
    var name = arrayName[0].slice(0,1).toUpperCase() + arrayName[0].slice(1);
    for(var i=1;i<arrayName.length;i++){
        name = name + " " + arrayName[i].toUpperCase();
    }
    return name;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

work.display();
projects.display();
bio.display();
education.display();