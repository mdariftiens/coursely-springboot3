-- Create roles table
CREATE TABLE roles (id BIGINT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL UNIQUE
);

-- Create users table
CREATE TABLE users (id BIGINT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL UNIQUE,password VARCHAR(255) NOT NULL,role_id BIGINT NOT NULL,FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Create courses table
CREATE TABLE courses (id BIGINT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),description VARCHAR(2000),price DOUBLE PRECISION,is_free BOOLEAN,uploaded_by BIGINT NOT NULL,FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- Create videos table
CREATE TABLE videos (id BIGINT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),url VARCHAR(255),thumbnail_url VARCHAR(255),price DOUBLE PRECISION,is_free BOOLEAN,storage_type VARCHAR(255),duration INTEGER,series INTEGER,course_id BIGINT NOT NULL,FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Create course_materials table
CREATE TABLE course_materials (id BIGINT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),file_url VARCHAR(255),file_type VARCHAR(255),uploaded_at TIMESTAMP,course_id BIGINT NOT NULL,FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Create bundles table
CREATE TABLE bundles (id BIGINT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),description VARCHAR(2000),price DOUBLE PRECISION
);

CREATE TABLE bundle_courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    bundle_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    FOREIGN KEY (bundle_id) REFERENCES bundles(id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    CONSTRAINT unique_bundle_course UNIQUE (bundle_id, course_id)
);


-- Create purchases table
CREATE TABLE purchases (id BIGINT AUTO_INCREMENT PRIMARY KEY,user_id BIGINT NOT NULL,purchase_type VARCHAR(255),reference_id BIGINT,amount DOUBLE PRECISION,payment_status VARCHAR(255),FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create payments table
CREATE TABLE payments (id BIGINT AUTO_INCREMENT PRIMARY KEY,amount DOUBLE PRECISION,payment_method VARCHAR(255),transaction_id VARCHAR(255),purchase_id BIGINT NOT NULL UNIQUE,FOREIGN KEY (purchase_id) REFERENCES purchases(id)
);

-- Create comments table
CREATE TABLE comments (id BIGINT AUTO_INCREMENT PRIMARY KEY,comment_text VARCHAR(1000),user_id BIGINT NOT NULL,course_id BIGINT,video_id BIGINT,FOREIGN KEY (user_id) REFERENCES users(id),FOREIGN KEY (course_id) REFERENCES courses(id),FOREIGN KEY (video_id) REFERENCES videos(id)
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role_id);
CREATE INDEX idx_courses_uploaded_by ON courses(uploaded_by);
CREATE INDEX idx_videos_course ON videos(course_id);
CREATE INDEX idx_materials_course ON course_materials(course_id);
CREATE INDEX idx_bundle_courses_bundle ON bundle_courses(bundle_id);
CREATE INDEX idx_bundle_courses_course ON bundle_courses(course_id);
CREATE INDEX idx_purchases_user ON purchases(user_id);
CREATE INDEX idx_purchases_type_reference ON purchases(purchase_type, reference_id);
CREATE INDEX idx_payments_purchase ON payments(purchase_id);
CREATE INDEX idx_comments_user ON comments(user_id);
CREATE INDEX idx_comments_course ON comments(course_id);
CREATE INDEX idx_comments_video ON comments(video_id);