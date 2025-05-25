import { Component, input } from '@angular/core'
import { NgIcon } from '@ng-icons/core'

export interface Skill {
  name: string
  icon: string
  category?: string
}

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [NgIcon],
  template: `
    <div class="group bg-white border border-gray-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300/80 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
      <!-- ヘッダー部分 -->
      <div class="flex items-center justify-center text-center">
        <!-- アイコン表示 -->
        <div class="flex flex-col items-center">
          <div [class]="getIconClass()" class="w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <ng-icon [name]="skill().icon" size="20" [class]="getIconTextClass()"></ng-icon>
          </div>
          <h3 class="text-sm font-medium text-gray-900 mb-1 text-center leading-tight">
            {{ skill().name }}
          </h3>
          @if (skill().category) {
            <p class="text-xs text-gray-500">{{ skill().category }}</p>
          }
        </div>
      </div>
    </div>
  `,
})
export class SkillItemComponent {
  skill = input.required<Skill>();

  getIconClass(): string {
    const colorMap: { [key: string]: string } = {
      // Frontend - より控えめで洗練された色合い
      'HTML/CSS': 'bg-gradient-to-br from-slate-100 to-slate-200',
      'JavaScript': 'bg-gradient-to-br from-amber-50 to-amber-100',
      'TypeScript': 'bg-gradient-to-br from-blue-50 to-blue-100',
      'Angular': 'bg-gradient-to-br from-red-50 to-red-100',
      'React': 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      'Vue.js': 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      'Tailwind CSS': 'bg-gradient-to-br from-sky-50 to-sky-100',
      'SASS/SCSS': 'bg-gradient-to-br from-pink-50 to-pink-100',
      'Responsive Design': 'bg-gradient-to-br from-purple-50 to-purple-100',
      
      // Backend
      'Node.js': 'bg-gradient-to-br from-green-50 to-green-100',
      'Express': 'bg-gradient-to-br from-gray-50 to-gray-100',
      'NestJS': 'bg-gradient-to-br from-red-50 to-rose-100',
      'MongoDB': 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      'PostgreSQL': 'bg-gradient-to-br from-blue-50 to-indigo-100',
      'RESTful API': 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      'GraphQL': 'bg-gradient-to-br from-pink-50 to-purple-100',
      
      // Other
      'Git': 'bg-gradient-to-br from-orange-50 to-orange-100',
      'Docker': 'bg-gradient-to-br from-sky-50 to-sky-100',
      'CI/CD': 'bg-gradient-to-br from-teal-50 to-teal-100',
      'Jest': 'bg-gradient-to-br from-red-50 to-red-100',
      'Cypress': 'bg-gradient-to-br from-slate-50 to-slate-100',
      'Figma': 'bg-gradient-to-br from-violet-50 to-violet-100',
      'Agile/Scrum': 'bg-gradient-to-br from-blue-50 to-blue-100'
    }
    
    return colorMap[this.skill().name] || 'bg-gradient-to-br from-gray-50 to-gray-100'
  }

  getIconTextClass(): string {
    const textColorMap: { [key: string]: string } = {
      // Frontend
      'HTML/CSS': 'text-slate-600',
      'JavaScript': 'text-amber-600',
      'TypeScript': 'text-blue-600',
      'Angular': 'text-red-600',
      'React': 'text-cyan-600',
      'Vue.js': 'text-emerald-600',
      'Tailwind CSS': 'text-sky-600',
      'SASS/SCSS': 'text-pink-600',
      'Responsive Design': 'text-purple-600',
      
      // Backend
      'Node.js': 'text-green-600',
      'Express': 'text-gray-600',
      'NestJS': 'text-red-600',
      'MongoDB': 'text-emerald-600',
      'PostgreSQL': 'text-blue-600',
      'RESTful API': 'text-indigo-600',
      'GraphQL': 'text-pink-600',
      
      // Other
      'Git': 'text-orange-600',
      'Docker': 'text-sky-600',
      'CI/CD': 'text-teal-600',
      'Jest': 'text-red-600',
      'Cypress': 'text-slate-600',
      'Figma': 'text-violet-600',
      'Agile/Scrum': 'text-blue-600'
    }
    
    return textColorMap[this.skill().name] || 'text-gray-600'
  }
}
