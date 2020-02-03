<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "recipe" => "Put it in the oven and go!",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "recipe" => "You can make this delicious Dutch meal by ...",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "recipe" => "Very nice when your grandma makes this",
            "kitchen" => "Italian",
        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "recipe" => "Everytime in the city after midnight",
            "kitchen" => "Turkish",
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "recipe" => "Specialty when on holiday in Spain",
            "kitchen" => "Spanish",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getTagsByDishId($id)
{
    $tags = [
        1 => ['cheese', 'oven'],
        2 => ['unox', 'healthy', 'stamppot', 'boerenkool'],
        3 => ['omnomnom'],
        4 => ['kapsalon', 'tasty', 'meat'],
        5 => ['fish'],
    ];

    return $tags[$id];
}
