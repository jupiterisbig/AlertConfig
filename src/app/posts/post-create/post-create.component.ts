import {Component} from '@angular/core';

import {NgForm} from '@angular/forms'
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

    constructor(public postsService: PostsService){}

    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
        console.log(form.value)
        // this.postsService.addPost(form.value.title, form.value.content);
        // form.resetForm();
        this.postsService.addPost(form.value).subscribe(
            (res) => {
            form.resetForm();
            },
            (error) => {
                console.log(error)
             }
        )
    }   
}