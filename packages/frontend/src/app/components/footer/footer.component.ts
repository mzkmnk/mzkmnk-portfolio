import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- ブランド情報 -->
          <div class="md:col-span-2">
            <div class="flex items-center mb-6">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                MZK.MNK.DEV
              </h3>
            </div>
            
            <!-- 技術スタック -->
            <div class="mb-8">
              <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">主な技術スタック</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">Angular</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">TypeScript</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">Tailwind CSS</span>
                <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">Node.js</span>
              </div>
            </div>
          </div>
          
          <!-- ナビゲーション & ソーシャル -->
          <div>
            <div class="mb-8">
              <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">ナビゲーション</h4>
              <ul class="space-y-4">
                <li>
                  <a routerLink="/" class="group flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <svg class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    ホーム
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">ソーシャル</h4>
              <div class="flex space-x-4">
                <a href="https://github.com/mzkmnk" target="_blank" class="group p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://github.com/mzkmnk" target="_blank" class="group p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- コピーライト -->
        <div class="mt-16 pt-8 border-t border-gray-700">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
              © 2025 Portfolio. All rights reserved.
            </p>
            <p class="text-gray-500 text-xs mt-2 md:mt-0">
              Built with Angular & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
