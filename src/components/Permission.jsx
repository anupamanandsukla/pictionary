import React from 'react'
import SubTitle from '../elements/SubTitle';
import labels from '../constant/labels';
import Card from '../elements/Cards';
import {  SettingsPhotoCameraOutlineSvg } from '../constant/svg';
import {Button} from '../elements/ui/button';

const Permission = (props) => {
    const reload = () => {
        window.location.reload();
    };
    return (
        <div className="flex flex-col text-center justify-between px-4 pb-6 h-full ">
            <div >
                    <SettingsPhotoCameraOutlineSvg height={'40vh'} />
                    {props.checkAccessTxt}
                </div>     
            <Card className='absolute bottom-5 w-10/12'>
                <SubTitle className='pb-4'>
                    Kindly provide the necessary permissions and reload
                </SubTitle>
                <Button
                    onClick={reload}
                >
                    {labels.reload}
                </Button>
            </Card>
        </div>
    )
}

export default Permission