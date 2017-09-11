/*
This is empty on purpose! Your code to build the resume will go here.
 */
//"use strict";
//个人信息
var bio = {
    name: "Peter Pan",
    role: "Web Developer",
    contacts: {
        mobile: "020",
        email: "haotaopan@163.com",
        github: "htpan",
        twitter: "@htpan",
        location: "GuangZhou"
    },
    welcomeMessage: "Hello World!",
    skills: ["HTML", "CSS", "JavaScript"],
    biopic: "images/fry.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedName, formattedRole);

    //页头页脚联系方式
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    //头像
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $(formattedBioPic).insertAfter("#topContacts");

    //欢迎语和技能
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $(formattedWelcomeMsg).insertAfter(".biopic");

    $(HTMLskillsStart).insertAfter(".welcome-message");

    function addskills() {
        var num = bio.skills.length;
        for (var i = 0; i < num; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills-h3").append(formattedSkills);
        }
    }
    addskills();
};
//$("#main").append(bio.display);
bio.display();




//工作信息
var work = {
    jobs: [{
            employer: "employer1",
            title: "this is a title",
            location: "BeiJing",
            dates: "2014-2015",
            description: "this is a description:Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down."
        },
        {
            employer: "employer2",
            title: "this is a title",
            location: "California",
            dates: "2015-2017",
            description: "this is a description:Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down."
        }
    ]
};

work.display = function() {

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var workEmployer = HTMLworkEmployer.replace("%data%",job.employer);

        var workTitle = HTMLworkTitle.replace("%data%",job.title);

        var employerTitle = workEmployer + workTitle;

        var workDates = HTMLworkDates.replace("%data%",job.dates);

        var workLocation = HTMLworkLocation.replace("%data%",job.location);

        var workDescription = HTMLworkDescription.replace("%data%",job.description);

        $(".work-entry:last").append(employerTitle, workDates, workLocation, workDescription);
    });
};
//$("#main").append(work.display);
work.display();

//项目信息
var projects = {
    projects: [{
        title: "project1",
        dates: "2017.03-2017.04",
        description: "this is a description:Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.",
        images: ["images/cat.jpg", "images/cat.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace("%data%", project.title);

        var projectDates = HTMLprojectDates.replace("%data%", project.dates);

        var projectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(projectTitle, projectDates, projectDescription);

        project.images.forEach(function(image) {

            var projectImage = HTMLprojectImage.replace("%data%", image);

            $(".project-entry:last").append(projectImage);
        });
    });
};
//$("#main").append(projects.display);
projects.display();

//学历信息
var education = {
    schools: [{
            name: "GZ High School",
            location: "GuangZhou",
            degree: "High school degree",
            majors: ["Chinese", "Maths", "English"],
            dates: "2007-2010",
            url: "https://www.udacity1.com/"
        },
        {
            name: "GZ University",
            location: "GuangZhou",
            degree: "undergraduate degree",
            majors: ["Chemistry", "Chinese", "Maths", "English"],
            dates: "2010-2014",
            url: "https://www.udacity2.com/"
        }
    ],

    onlineCourses: [{
        title: "Front-End Web Development",
        school: "udacity",
        dates: "2017.03-2017.09",
        url: "https://www.udacity.com/"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", school.name);

        var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

        var schoolNameDegree = schoolName + schoolDegree;

        var schoolDates = HTMLschoolDates.replace("%data%", school.dates);

        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);

        var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(schoolNameDegree, schoolDates, schoolLocation, schoolMajor);
    });

     $("div.education-entry a:first()").attr("href", education.schools[0].url);

     $("div.education-entry a:eq(1)").attr("href", education.schools[1].url);

    //online部分
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {

        $("#education").append(HTMLschoolStart);

        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

        var onlineTitleSchool = onlineTitle + onlineSchool;

        var onlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);

        var onlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $(".education-entry:last").append(onlineTitleSchool, onlineDates, onlineURL);
    });

    $("div.education-entry a:eq(2), div.education-entry a:eq(3)").attr("href", education.onlineCourses[0].url);
};
//$("#main").append(education.display);
education.display();

//地图
$("#mapDiv").append(googleMap);