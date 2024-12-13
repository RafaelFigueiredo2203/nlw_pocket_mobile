import React from 'react'
import { FlatList } from 'react-native'
import { Category } from '../category'
import { s } from './styles'

export type CategoriesProps = {
  id: string
  name: string
}[]

type Props = {
  data: CategoriesProps
  selected: string
  onSelectCategory: (id: string) => void
}

export function Categories({ data, selected, onSelectCategory }: Props) {
  console.log(data)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          onPress={() => onSelectCategory(item.id)}
          isSelected={selected === item.id}
        />
      )}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
      showsHorizontalScrollIndicator={false}
    />
  )
}
