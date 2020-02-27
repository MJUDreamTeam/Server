module.exports = {
    OK: 200,            // Get, Delete 성공 시
    CREATED: 201,       // Post, Put 성공 시
    NO_CONTENT: 204,    // 보내줄 컨텐츠 없음
    BAD_REQUEST: 400,   // 클라이언트 문제
    UNAUTHORIZED: 401,  // 인증자격 없음
    FORBIDDEN: 403,     // 페이지 접근 거부
    NOT_FOUND: 404,     // 잘못된 주소
    INTERNAL_SERVER_ERROR: 500, // 서버 문제
    SERVICE_UNAVAILABLE: 503,   // 없는 서비스
    DB_ERROR: 600,      // DB 문제
};