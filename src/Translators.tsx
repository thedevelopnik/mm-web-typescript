export function ageRanges(ageRangeNums: number[]) {
    if (ageRangeNums) {
        const ageRangeWords = ageRangeNums.map(el => {
            switch (el) {
                case 0:
                    return `0 to 3`;
                case 1:
                    return `3 to 6`;
                case 2:
                    return `6 to 9`;
                case 3:
                    return `9 to 12`;
                case 4:
                    return `12 to 15`;
                case 5:
                    return `15 to 18`;
                default:
                    return null;
            }
        });
        const ageRangeList = ageRangeWords.join(`, `);
        return ageRangeList;
    }
    return null;
}

export function cals(calsNums: number[]) {
    if (calsNums) {
        const calsWords = calsNums.map(el => {
            switch (el) {
                case 0:
                    return `Traditional`;
                case 1:
                    return `Year Round`;
                default:
                    return null;
            }
        });
        const calsList = calsWords.join(`, `);
        return calsList;
    }
    return null;
}

export function orgTypes(orgTypesNums: number[]) {
    if (orgTypesNums) {
        const orgTypesWords = orgTypesNums.map(el => {
            switch (el) {
                case 0:
                    return `Public District`;
                case 1:
                    return `Public Magnet`;
                case 2:
                    return `Public Charter`;
                case 3:
                    return `Public Innovation`;
                case 4:
                    return `Private For-Profit, Single Owner`;
                case 5:
                    return `Private For-Profit, Corporate Owner`;
                case 6:
                    return `Private Non-Profit`;
                default:
                    return null;
            }
        });
        const orgTypesList = orgTypesWords.join(`, `);
        return orgTypesList;
    }
    return null;
}

export function locTypes(locsNums: number[]) {
    if (locsNums) {
        const locsWords = locsNums.map(el => {
            switch (el) {
                case 0:
                    return `Urban`;
                case 1:
                    return `Suburban`;
                case 2:
                    return `Small City`;
                case 3:
                    return `Rural`;
                default:
                    return null;
            }
        });
        const locsList = locsWords.join(`, `);
        return locsList;
    }
    return null;
}

export function edTypes(edsNums: number[]) {
    if (edsNums) {
        const edsWords = edsNums.map(el => {
            switch (el) {
                case 0:
                    return `No College`;
                case 1:
                    return `Some College`;
                case 2:
                    return `Associate's Degree`;
                case 3:
                    return `Bachelor's Degree`;
                case 4:
                    return `Master's Degree`;
                case 5:
                    return `Doctorate`;
                default:
                    return null;
            }
        });
        const edsList = edsWords.join(`, `);
        return edsList;
    }
    return null;
}


export function sizes(sizesNums: number[]) {
    if (sizesNums) {
        const sizesWords = sizesNums.map(el => {
            switch (el) {
                case 0:
                    return `4 or less`;
                case 1:
                    return `4 to 9`;
                case 2:
                    return `10 to 19`;
                case 3:
                    return `20 or more`;
                default:
                    return null;
            }
        });
        const sizesList = sizesWords.join(`, `);
        return sizesList;
    }
    return null;
}

export function trainings(trainingsNums: number[]) {
    if (trainingsNums) {
        const trainingsWords = trainingsNums.map(el => {
            switch (el) {
                case 0:
                    return `AMI`;
                case 1:
                    return `AMS`;
                case 2:
                    return `MCI`;
                case 3:
                    return `SNM`;
                case 4:
                    return `Other`;
                default:
                    return null;
            }
        });
        const trainingsList = trainingsWords.join(`, `);
        return trainingsList;
    }
    return null;
}

export function traits(traitsNums: number[]) {
    if (traitsNums) {
        const traitsWords = traitsNums.map(el => {
            switch (el) {
                case 0:
                    return `Ambitious`;
                case 1:
                    return `Humorous`;
                case 2:
                    return `Collaborative`;
                case 3:
                    return `Independent`;
                case 4:
                    return `Extroverted`;
                case 5:
                    return `Introverted`;
                case 6:
                    return `Artistic`;
                case 7:
                    return `Musical`;
                case 8:
                    return `Creative`;
                case 9:
                    return `Organized`;
                case 10:
                    return `Playful`;
                case 11:
                    return `Quiet`;
                case 12:
                    return `Verbal Communicator`;
                case 13:
                    return `Written Communicator`;
                case 14:
                    return `Joyful`;
                case 15:
                    return `Techie`;
                case 16:
                    return `Analog`;
                case 17:
                    return `Patient`;
                case 18:
                    return `Spontaneous`;
                case 19:
                    return `Routine Oriented`;
                default:
                    return null;
            }
        });
        const traitsList = traitsWords.join(`, `);
        return traitsList;
    }
    return null;
}

export function states(statesNums: number[]) {
    if (statesNums) {
        const statesWords = statesNums.map(el => {
            switch (el) {
                case 0:
                    return `AK`;
                case 1:
                    return `AL`;
                case 2:
                    return `AR`;
                case 3:
                    return `AZ`;
                case 4:
                    return `CA`;
                case 5:
                    return `CO`;
                case 6:
                    return `CT`;
                case 7:
                    return `DC`;
                case 8:
                    return `DE`;
                case 9:
                    return `FL`;
                case 10:
                    return `GA`;
                case 11:
                    return `HI`;
                case 12:
                    return `IA`;
                case 13:
                    return `ID`;
                case 14:
                    return `IL`;
                case 15:
                    return `IN`;
                case 16:
                    return `KS`;
                case 17:
                    return `KY`;
                case 18:
                    return `LA`;
                case 19:
                    return `MA`;
                case 20:
                    return `MD`;
                case 21:
                    return `ME`;
                case 22:
                    return `MI`;
                case 23:
                    return `MN`;
                case 24:
                    return `MO`;
                case 25:
                    return `MS`;
                case 26:
                    return `MT`;
                case 27:
                    return `NC`;
                case 28:
                    return `ND`;
                case 29:
                    return `NE`;
                case 30:
                    return `NH`;
                case 31:
                    return `NJ`;
                case 32:
                    return `NM`;
                case 33:
                    return `NV`;
                case 34:
                    return `NY`;
                case 35:
                    return `OH`;
                case 36:
                    return `OK`;
                case 37:
                    return `OR`;
                case 38:
                    return `PA`;
                case 39:
                    return `RI`;
                case 40:
                    return `SC`;
                case 41:
                    return `SD`;
                case 42:
                    return `TN`;
                case 43:
                    return `TX`;
                case 44:
                    return `UT`;
                case 45:
                    return `VA`;
                case 46:
                    return `VT`;
                case 47:
                    return `WA`;
                case 48:
                    return `WI`;
                case 49:
                    return `WY`;
                default:
                    return null;
            }
        });
        const statesList = statesWords.join(`, `);
        return statesList;
    }
    return null;
}
