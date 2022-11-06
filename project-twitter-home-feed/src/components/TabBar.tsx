import { TabBarItem, TabBarItemProps } from './TabBarItem'


export interface TabBarProps {

  appearance?: 'dark' | 'normal';
  itemSelected?: 'Tweets' | 'Tweets & replies' | 'Media' | 'Likes';

}
export function TabBar({ appearance = 'normal', itemSelected = 'Tweets' }: TabBarProps) {
  let isTweetsSelected;
  let isTweetsRepliesSelected;
  let isMediaSelected;
  let isLikesSelected;

  //Switch que criaria as variações desses itens. 
  switch (itemSelected) {
    case 'Tweets': {
      isTweetsSelected = true;
      isLikesSelected = false;
      isMediaSelected = false;
      isTweetsRepliesSelected = false;

      break;
    }
    case 'Tweets & replies': {
      isTweetsRepliesSelected = true;
      isTweetsSelected = false;
      isLikesSelected = false;
      isMediaSelected = false;

      break;

    }
    case 'Media': {
      isMediaSelected = true;
      isTweetsRepliesSelected = false;
      isTweetsSelected = false;
      isLikesSelected = false;
      break;

    }
    case 'Likes': {
      isLikesSelected = true;
      isMediaSelected = false;
      isTweetsRepliesSelected = false;
      isTweetsSelected = false;
      break;

    }
  }
  return (
    <div className='flex'  >
      < TabBarItem isSelected={isTweetsSelected} type={appearance}/>
      < TabBarItem  isSelected={isTweetsRepliesSelected} itemText='Tweets & replies' type={appearance} />
      < TabBarItem isSelected={isMediaSelected}  itemText='Media' type={appearance} />
      < TabBarItem  isSelected={isLikesSelected} itemText='Likes' type={appearance} />

    </div >
  )
}