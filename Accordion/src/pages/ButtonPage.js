import Button from '../components/button'
import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log ('Click!');
    }



    return <div>
        <div>
            <Button className='mb-5' success rounded outline onClick={handleClick}>
                <GoBell />
                Click me!!</Button>
        </div>
        <div>
            <Button warning>
                <GoCloudDownload />
                Buy Now!</Button>
        </div><div>
            <Button secondary outline>
                <GoDatabase />
                See Deal!</Button>
        </div><div>
            <Button primary rounded>Hide Ads!</Button>
        </div><div>
            <Button danger outline>Push Me!</Button>
        </div><div>
            <Button warning rounded>Done Deal!</Button>
        </div>
    </div>;
}
export default ButtonPage;