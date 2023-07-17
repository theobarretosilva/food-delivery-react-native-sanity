import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
        name: 'name',
        type: 'string',
        title: 'Dish name',
        validation : rule => rule.required()
    },
    {
        name: 'description',
        type: 'string',
        title: 'Dish description',
        validation : rule => rule.required()
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image of the dish'
    },
    {
        name: 'price',
        type: 'number',
        title: 'Price of the dish in USD'
    },
  ],
})
