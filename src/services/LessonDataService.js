import http from "../http-common";
class LessonDataService {
  getAllLessons(tutorialId) {
    return http.get(`/tutorials/${tutorialId}/lessons`);
  }
  getLesson(tutorialId,id) {
    return http.get(`/tutorials/${tutorialId}/lessons/${id}`);
  }
  createLesson(tutorialId,data) {
    return http.post(`/tutorials/${tutorialId}/lessons`, data);
  }
  updateLesson(tutorialId,id, data) {
    return http.put(`/tutorials/${tutorialId}/lessons/${id}`, data);
  }
  deleteLesson(tutorialId,id) {
    return http.delete(`/tutorials/${tutorialId}/lessons/${id}`);
  }

}
export default new LessonDataService();