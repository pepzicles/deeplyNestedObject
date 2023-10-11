caning_as_corporal_punishment = {
    countries: {
        "Malaysia": true,
        "Singapore": true,
        "Brunei": true,
    },
    sex: function (sex) {
        if (sex == "male") {
            return true
        }
        else {
            return false
        }
    }, 
    feeling: ["shocked", "surprised", "disappointed", "angry", "confused"],
    feeling_intensity: [1, 2, 3, 4, 5],

}


perspectives_on_caning = {
    singaporeans: {
        accepted: true,
        contexts: {
            homes: "parent on child",
            schools: "teacher on student",
            judicial: "officer on offender"
        },
    },
    new_york: {
        friend_responses: {
            friend1: "disbelief",
            friend2: "shocked",
            friend3: "horrified",
        },
        my_response: {
            feeling: "confused",
            belief: "it's normal",
            questions: ["does this make Singapore 'backward'?", "how did this get implemented in the first place?", "should I feel ashamed?", "is this considered stand-enforced violence?", "what do other singaporeans think?"],
            reaction: "deep dive into caning in Singapore"
        }
    }
}


history = {
    year_introduced: 1871,
    introduced_by: 'british colonial rule',
    offence_punishable_by_caning: ['robbery', 'theft', 'burglary', 'assault', 'sexual abuse', 'vandalism', 'offence related to prostitution'],
    end_of_colonial_rule: function (year) {
        if (year <= 1957){
            console.log("Caning remianed on statute book")
        }
        if (1957 < year <= 1965) {
            console.log("Singapore separated from Malaysia")
        }
        if (year > 1965) {
            current = {
                minimum_strokes: "increased",
                number_of_crimes_punishable: "increased"
            }
            console.log(current);
        }
    },
    number_of_caning_sentences: {
        1993: 3244,
        2007: 6404,
        2016: 1257
    },
    location: [
        "Changi Prison", "Drug Rehabilitation Centers"
    ]
}


cane = {
    appearance: {
        material: "rattan",
        diameter: 0.5,
        unique_facts: [
            "It is soaked in water overnight to prevent it from splitting and embedding spliters in wounds",
            "A lighter cane is used for juvinile offenders",
            "Offenders have to strip completely naked for caning",
            "Offenders have to bend over 90 degrees for caning",
            "The British Dual-purpose prison flogging frame is still used today."
        ]
    }
}


diplomatic_crisis = {
    name: "Michael P. Fay",
    age: 18,
    citizenship: "American", 
    offence: "vandalism",
    year: 1994,
    sentence: {
        imprisonment: "4 months",
        fine: 3500,
        cane_strokes: 6,
    },
    response: function stakeholders(){
        var userName = prompt("Whose response do you want to know?  Type only the NUMBER. \n 1. U.S. President \n 2. Singapore President");
        if (userName == 1) {
            console.log("Then U.S. President Bill Clinton asked for an appeal for clemency.")
        }
        else {
            console.log("Ong Teng Cheong refused to pardon Fay, but reduced caning sentence from 6 to 4")                                                                                                                                                                                           
        }
    }
}

food_for_thought = {
    feelings: 'conflicted',
    thoughts: {
        repeal_caning: [
            "undignified",
            "violent implications",
            "unnecessary",
        ],
        frustration: [
            "western lens",
            "post-colonial effects",
            "stop telling other nations what to do",
        ]
    },
    post_comment: function postComment() {
        var comment = prompt("What are your thoughts on caning, given the post-colonial contexts of it all?")
    }
}