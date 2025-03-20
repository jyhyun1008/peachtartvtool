"use server";
import { sql, eq, and, or, like, desc } from 'drizzle-orm'
import { db } from "@/src/db/drizzle";
import { users, videos } from "@/src/db/schema";

export const addUser = async (user) => {
    const data = await db.insert(users)
                        .values({
                            handle: user.handle,
                            knownas: user.knownAs,
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
                            biolong: '',
                            links: '[]',
                            group: 'pending',
                        })
                        .where(eq(users.email, user.email))
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
                        .where(eq(users.email, user.email))
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

// export const addPost = async (post) => {
//     const boarddata = await db.select().from(boards).where(eq(boards.url, post.board))
//     const userdata = await db.select().from(users).where(eq(users.email, post.user))
//     if (userdata[0]) {
//         let data = await db.insert(posts)
//         .values({
//             title: post.title,
//             content: post.content,
//             board: boarddata[0].pid,
//             createdat: sql`NOW()`,
//             thumburl: post.content.split(`![`)[1]?post.content.split(`![`)[1].split(`](`)[1].split(`)`)[0]:'https://cdn.imweb.me/upload/S202004039b79029ae4742/e4b86a6b2d348.png',
//             user: userdata[0].pid,
//             public: post.public?post.public:true
//         });
//         return data;
//     }
// };

// export const updatePost = async (post) => {
//     let data = await db.update(posts)
//     .set({
//         title: post.title,
//         content: post.content,
//         thumburl: post.content.split(`![`)[1]?post.content.split(`![`)[1].split(`](`)[1].split(`)`)[0]:'https://cdn.imweb.me/upload/S202004039b79029ae4742/e4b86a6b2d348.png',
//         public: post.public?post.public:true
//     })
//     .where(eq(posts.pid, post.pid))
//     return data
// }

// export const deletePost = async (url, email) => {
//     const userdata = await db.select().from(users).where(eq(users.email, email))
//     const data = await db.delete(posts).where(and(eq(posts.user, userdata[0].pid), eq(posts.pid, url)));
//     let replydata = await db.delete(replies).where(eq(replies.post, url))
//     return data
// }

// export const getAllPosts = async () => {
//     const data = await db.select().from(posts).where(eq(posts.public, true));
//     return data;
// };

// export const getPostsOfUser = async (username) => {
//     const usernameresult = await db.select().from(users).where(eq(users.username, username));
//     const data = await db.select().from(posts).where(and(eq(posts.public, true), eq(posts.user, usernameresult[0].pid)));
//     return data;
// };
