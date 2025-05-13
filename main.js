const Steps = [];
const Results = [];

class Product {
    constructor() {
        this.folders = [];
    }

    addFolder() {
        this.folders.push(new Folder(inputFeatureName.value));
        console.log(this.folders);

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

const product = new Product();
const testcase = new TestCase();
const spet = new Step();


function addFolder() {
    project.addFolder();
}



