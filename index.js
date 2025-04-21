const inputFeatureName = document.getElementById("inputFeatureName");
const Steps = [];  //step objects array
const Results = [];  //results objects array

class Project { // class Project contains folder objects array
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
}

class TestCase { // class TestCase contains the fields testName and testDescription
    constructor(testCaseName, testCaseDescription) {
        this.testCaseName = testCaseName;
        this.testCaseDescription = testCaseDescription;
    }
}

class Step { // class Spet contain stepDescription field 
    constructor(stepDescription) {
        this.stepDescription = stepDescription;
    }
}

const project = new Project();
const testcase = new TestCase();
const spet = new Step();


function addFolder() {
    project.addFolder();
}



