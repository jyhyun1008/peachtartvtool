
import MarkedParser from "@/components/MarkedParser";
import DateTime from "./DateTime";
import Link from "next/link";

export default function Feed({date, handle, knownAs, avatar, raw, url, images=[]}) {

    const snsFeed = {
        display: 'flex',
        gap: 10,
    }

    const profileImgStyle = {
        width: 70,
        height: 70,
        aspectRatio: 1,
        borderRadius: 14,
    }

    const rawWithLink = raw.replace(/(?:^|\s)https\:\/\/([^\s]+)/gm, ' [https://$1](https://$1)').replace(/(?:^|\s)http\:\/\/([^\s]+)/gm, ' [http://$1](https://$1)').replace(/\n/gm, '\n\n')

    return (
        
            <div style={snsFeed}>
                <img src={avatar} style={profileImgStyle} />
                <div>
                    <Link href={url} style={{color: 'var(--foreground)'}}>
                        <p><b>{knownAs}</b></p>
                        <p style={{fontSize: '0.8rem'}}>@{handle}</p>
                    </Link>
                    <MarkedParser raw={rawWithLink} />
                    <div style={{overflowX: 'auto', display: 'flex'}}>
                    {images.map((img, ind)=> (
                        <img style={{width: 150, height: 150, objectFit: 'cover', borderRadius: 20, objectPosition: 'center'}} key={`img${ind}`} src={img.link} />
                    ))}
                    </div>
                    <p style={{fontSize: '0.8rem'}}><DateTime iso={date} /></p>
                </div>
            </div>
    )
}