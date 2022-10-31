import { clsx } from 'clsx';
import { Image, Gif, ChartBarHorizontal, Smiley, CalendarCheck } from "phosphor-react";


export interface SpacerProps {

  type?: 'dark' | 'normal';

}
export function Spacer({ type = 'normal' }: SpacerProps) {

  return (
    <div className={clsx('w-2/5 h-3', {

      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })} >
     

    </div >
  )
}