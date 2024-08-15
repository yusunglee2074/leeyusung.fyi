export type Json = number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: number;
          created_at: string;
          title: string;
          content: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          title: string;
          content: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          title?: string;
          content?: string;
        };
      };
      home_info: {
        Row: {
          id: number;
          about: string;
          github: string;
          linkedin: string;
          x: string;
          threads: string;
          email: string;
          kakao: string;
        };
        Insert: {
          id?: number;
          about: string;
          github?: string;
          linkedin?: string;
          x?: string;
          threads?: string;
          email: string;
          kakao: string;
        };
        Update: {
          id?: number;
          about?: string;
          github?: string;
          linkedin?: string;
          x?: string;
          threads?: string;
          email?: string;
          kakao?: string;
        };
      };
    };
  };
}
