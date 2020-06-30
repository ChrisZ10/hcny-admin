import { Injectable } from '@angular/core';
import { Announcement } from '../interface/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  getAnnouncements(): Announcement[] {
    return [
      {
        title: '教會大堂屋頂重鋪防水層',
        content: '教會大堂的屋頂多處滲漏，雖經幾次修補，但隱患猶存。上週四理事會經討論，決定重新鋪設防水層，將與Garland公司簽約，近期開工'
      },
      {
        title: '教會考慮重新開放聚會',
        content: '教會將審慎考慮逐步開放實體聚會的可能性。目前籌備拍攝宣導短片，並增強安全防護措施，對室內全面清潔消毒，更新通風系統，減少室內座椅'
      }
    ]
  }
}
