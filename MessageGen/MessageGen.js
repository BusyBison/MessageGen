function randMessage() {
    let arrays = {
        _names: ['Bert', 'Berta', 'Albin', 'Tim', 'Bettina', 'Tobias', 'Stefanie', 'Marcel', 'Claus'],
        get names() {
            return this._names;
        },
        _activities: ['sind verheiratet.', 'reisen zusammen um die Welt.', 'haben eine Softwareentwicklungsfirma gegründet.', 'sind geschieden.'],
        get activities() {
            return this._activities;
        }
    }

    let randomNameNum1 = Math.floor(Math.random() * arrays.names.length);
    let randomNameNum2 = Math.floor(Math.random() * arrays.names.length);
    let randomActivitiesNum = Math.floor(Math.random() * arrays.activities.length);

    const randomName1 = arrays.names[randomNameNum1];
    const randomName2 = arrays.names[randomNameNum2];
    const randomActivity = arrays.activities[randomActivitiesNum];

    console.log(`Future of ${randomName1} and ${randomName2}:`);
    console.log(`${randomName1} and ${randomName2} ${randomActivity}`);
}

randMessage();
