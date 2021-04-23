function Employee(title) {
    console.log('employee', title);
    this.title = title;
}



function Engineer(title, isManager) {
    Employee.call(this, title);
    Employee.prototype.setTitle.call(this.title);
    // this.title = this.title;
    this.isManager=isManager;
}

Engineer.prototype=Object.create(Employee.prototype);
Engineer.prototype.constructor = Employee;
Engineer.prototype.getIsManager = () => {
    return this.isManager;
};

Engineer.prototype.setIsManager = (isManager) => {
    this.isManager = isManager;
};

Employee.prototype.setTitle=(title) => {
    this.title = title
};
Employee.prototype.getTitle = () => {
    console.log('employee', this);
    return this.title;
};

var engineerObject = new Engineer('Developer', false);
    console.log(engineerObject);
    console.log(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    engineerObject.setTitle('Developer 1');
    engineerObject.setIsManager(true);
    
    console.log(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    console.log(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    console.log(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    console.log(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    console.log(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);