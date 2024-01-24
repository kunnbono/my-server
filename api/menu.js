export const menuInfo = () => {
    const data = [
        {
            "displayName": "home",
            "url": "",
            "link": "/"
        },
        {
            "displayName": "team",
            "url": "",
            "link": "/team"
        },
        {
        "displayName": "fisrt father",
        "url": "",
        "link": "/falseURL",
        "children": [
            {
                "displayName": "fisrt child",
                "url": "",
                "link": "/falseURL",
                "children": [
                    {
                        "displayName": "fisrt grand child",
                        "url": "",
                        "link": "/falseURL"
                        }
                ]
            },
            {
                "displayName": "sec child",
                "url": "",
                "link": "/falseURL"
            }
        ]
        },
        {
            "displayName": "sec father",
            "url": "",
            "link": "/falseURL",
            "children": []
        },  
        {
            "displayName": "thi father",
            "url": "",
            "link": "/falseURL",
            "children": []
        },
        {
            "displayName": "fourth father",
            "url": "",
            "link": "/falseURL",
            "children": [
                {
                    "displayName": "fisrt child",
                    "url": "",
                    "link": "/falseURL",
                    "children": [
                        {
                            "displayName": "fisrt grand child",
                            "url": "",
                            "link": "/falseURL",
                            "children": [
                                {
                                    "displayName": "fisrt grand grand child",
                                    "url": "",
                                    "link": "/falseURL"
                                }
                            ]
                            }
                    ]
                },
                {
                    "displayName": "sec child",
                    "url": "",
                    "link": "/falseURL"
                }
            ]
        },
        {
            "displayName": "fifth father",
            "url": "",
            "link": "/falseURL",
            "children": []
        }
    ];
    return data
}