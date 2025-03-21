"use server";
import { sql, eq, and, or, like, desc } from 'drizzle-orm'
import { db } from "@/src/db/drizzle";
import { users, videos } from "@/src/db/schema";

export const addUser = async (user) => {
    const data = await db.insert(users)
                        .values({
                            uid: user.uid,
                            handle: user.uid,
                            knownas: '게스트',
                            email: user.email,
                            group: 'guest',
                            createdat: sql`NOW()`,
                            lastlogin: sql`NOW()`
                        });
    return data;
};

export const addUserByForm = async (user) => {
    const data = await db.update(users)
                        .set({
                            handle: user.handle, //bsky를 fetch해서 chzzk의 핸들대로.
                            knownas: user.knownAs, //chzzk을 fetch해서 chzzk의 닉네임대로.
                            avatar: user.avatar, //chzzk을 fetch해서 chzzk의 아바타대로.
                            chzzkid: user.chzzkId,
                            bskyhandle: user.bskyHandle,
                            accentcolor: '#ff4971',
                            avatarlong: '',
                            bio: '',
                            biolong: user.bioLong,
                            links: '[]',
                            group: 'pending',
                        })
                        .where(eq(users.uid, user.uid))
    return data;
};

export const updateUser = async (user) => {
    const data = await db.update(users)
                        .set({
                            handle: user.handle, //bsky를 fetch해서 chzzk의 핸들대로.
                            bskyhandle: user.bskyHandle,
                            accentcolor: user.accentColor,
                            avatarlong: user.avatarLong,
                            bio: user.bio,
                            biolong: user.bioLong,
                            links: user.links,
                        })
                        .where(eq(users.uid, user.uid))
    return data;
};

export const addUserGiveUp = async (user)=> {
    const data = await db.delete(users).where(eq(users.email, user.email))
    return data
}

export const signinUser = async (user) => {
    const data = await db.update(users)
                        .set({
                            lastlogin: sql`NOW()`,
                            knownas: user.knownAs, //chzzk을 fetch해서 chzzk의 닉네임대로.
                            avatar: user.avatar, //chzzk을 fetch해서 chzzk의 아바타대로.
                        })
                        .where(eq(users.uid, user.uid))
    return data;
};

export const getUsers = async () => {
    const data = await db.select().from(users).where(eq(users.group, 'member'));
    return data;
};

export const getUserById = async (id) => {
    const data = await db.select().from(users).where(eq(users.pid, id));
    return data;
};

export const getUserByHandle = async (handle) => {
    const data = await db.select().from(users).where(eq(users.handle, handle));
    return data;
};

export const getUserByEmail = async (email) => {
    const data = await db.select().from(users).where(eq(users.email, email));
    return data;
};

export const addVideo = async (video) => {
    const userdata = await db.select().from(users).where(eq(users.uid, video.uid))
    if (userdata[0]) {
        let data = await db.insert(videos)
        .values({
            title: video.title,
            url: video.url,
            category: video.category,
            owner: userdata[0].pid,
        });
        return data
    }
};

export const getAllVideos = async () => {
    const data = await db.select().from(videos).orderBy(desc(videos.pid))
    for await ( let d of data ) {
        const userdata = await db.select().from(users).where(eq(users.pid, d.owner))
        d.user = userdata[0]
    }
    return data
}

export const getVideosOfUser = async (params) => {
    const data = await db.select().from(videos).orderBy(desc(videos.pid)).where(eq(videos.owner, params.pid))
    return data
}
