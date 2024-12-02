import Accordion from './components/Accordion'

function App() {
    const items = 
    [
        {
            id: '12kn3',
            label: 'Click here',
            content: 'Your click is working'
        },
        {
            id: '12kn4',
            label:'Click again! ',
            content: 'Your click is working absolutely fine',
        },
        {
            id: '12kn5',
            label:'Try not to click!',
            content: 'You failed!',
        }
    ];
    return <Accordion items={items}/>
}
export default App;