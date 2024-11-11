import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://fendqnevuckngtsqlura.supabase.co/rest/v1/',
    headers: {
        'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbmRxbmV2dWNrbmd0c3FsdXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMzQyMjksImV4cCI6MjA0NjkxMDIyOX0.ki5qw8JmozXAAstqTfOeUnrXgaYX1PleHkNxru12tAw",
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbmRxbmV2dWNrbmd0c3FsdXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMzQyMjksImV4cCI6MjA0NjkxMDIyOX0.ki5qw8JmozXAAstqTfOeUnrXgaYX1PleHkNxru12tAw"
    }
});
