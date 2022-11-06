import { clsx } from 'clsx';



export interface TabBarItemProps {

  type?: 'dark' | 'normal';
  isSelected?: boolean;
  itemText?: string;


}
export function TabBarItem({ type = 'normal', isSelected = false, itemText = "Tweets" }: TabBarItemProps) {

  return (
    <div className={clsx('cursor-pointer  transition-all w-36 h-14 border-b-2 hover:border-primary-blue  hover:border-b-8 flex justify-center items-center ', {
      'border-b-primary-blue': isSelected,

      'border-b-dark-7': type == 'normal' && !isSelected,
      'border-b-dark-4': type == 'dark' && !isSelected,
    })}  >
      <span className={clsx('font-sans font-bold  text-md', {
        'text-primary-blue': isSelected,
        'text-dark-5': type == 'normal' && !isSelected,
        'text-dark-6': type == 'dark' && !isSelected,

      })}  >
        {itemText}
      </span>
    </div >
  )
}