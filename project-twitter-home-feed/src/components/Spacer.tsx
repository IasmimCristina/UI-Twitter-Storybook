import { clsx } from 'clsx';
import { Image, Gif, ChartBarHorizontal, Smiley, CalendarCheck } from "phosphor-react";


export interface SpacerProps {

  type?: 'dark' | 'normal';

}
export function Spacer({ type = 'normal' }: SpacerProps) {

  return (
    <div className={clsx('w-full h-3', {

      'bg-dark-7': type === 'normal',
      'bg-dark-4': type === 'dark',

    })} >
     

    </div >
  )
}