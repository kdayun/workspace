import Card from "./card";

function ProfileCard(props){
    return (
        <Card title="Hello" backgroundColor="skyblue" name="김다윤">
            <p>리액트를 공부하는 중입니다.</p>
            <p>너무 어렵네요...</p>
        </Card>
    );
}

export default ProfileCard;