import Card from "./Card"
export default function Student(){
    const clothes=[{desc: "t-shirt", size:"32", exists:"yes"},
        {desc: "skirt", size:"45", exists:"yes"},
        {desc: "dress", size:"12", exists:"no"}]
        return<>
        <Card clothes={clothes[0]} color="red"></Card>
        <Card clothes={clothes[1]} color="pink"></Card>
        <Card clothes={clothes[2]} color="blue"></Card>
        </>
}