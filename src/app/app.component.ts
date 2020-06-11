import { Component } from '@angular/core';
import React from 'react'
import { graphql, Link } from 'gatsby'
import { withAuthenticator, Connect } from 'aws-amplify-react'
import Amplify, { graphqlOperation } from 'aws-amplify'
import { listPostLikes } from '../graphql/queries'
import awsConfig from './aws-exports.js'

Amplify.configure(awsConfig)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartpune';
}
