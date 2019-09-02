import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class PostsService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    readonly header = new HttpHeaders().set("Content-Type", "application/json");
    readonly baseUrl = "http://localhost:3000/posts";

    constructor(private http: HttpClient){}

    getPosts(){
        return [...this.posts];
    }

    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    // addPost(title, content){
    //     const post: Post = {title: title, content: content};
    //     this.posts.push(post);
    //     this.postsUpdated.next([...this.posts]);
    // }
    addPost(post: Post){
        console.log(post);
        let url = this.baseUrl;
        return this.http.post(url, post, {headers: this.header});//.subscribe( res => console.log('Done'));
    }
}