const inputFeatureName = document.getElementById("inputFeatureName");
const Steps = [];
const Results = [];


// Toggle sidebar on mobile
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
});



class Project {
    constructor() {
        this.folders = [];
    }

    addFolder() {
        this.folders.push(new Folder(inputFeatureName.value));
        console.log(this.folders);
        inputFeatureName.value = "";
    }
}

class Folder { // class Folder contains testCase objects array
    constructor() {
        this.testCase = [];
    }

    addTestCase() {

    }
}

class TestCase { // class TestCase contains the fields testName and testDescription
    constructor(testCaseName, testCaseDescription) {
        this.testCaseName = testCaseName;
        this.testCaseDescription = testCaseDescription;
    }
}

class Step {
    constructor(stepDescription) {
        this.stepDescription = stepDescription;
    }

    addStep() {

    }
}

const project = new Project();
const testcase = new TestCase();
const spet = new Step();


function addFolder() {
    project.addFolder();
}



