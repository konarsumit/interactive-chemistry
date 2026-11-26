CHEMISTRY QUIZ BANK  (8 pages, one shared layout)

Files
  n5.html, higher.html, ah.html, gcse-aqa.html, gcse-ocr-a.html,
  alevel-aqa.html, alevel-ocr-a.html, alevel-ocr-b.html   -> the 8 pages
  quiz.css, quiz.js                                       -> shared layout + logic (edit once, all pages change)
  banks/<id>.js                                           -> the questions for each page (edit these to expand)

Upload the whole folder (keep the "banks" sub-folder) to the website. Pages also work by double-clicking the .html file.

Add a question: open banks/<id>.js and add one more line inside "questions":[ ... ]
  {id:'bonding-07',topic:'bonding',q:'Question text?',options:['A','B','C','D'],answer:2,explanation:'Why it is right.'},
  - answer = position of the correct option, counting from 0 (0=A, 1=B, 2=C, 3=D). Options are shuffled for students.
  - topic must match a topic id in the "topics" list at the top of the same file.
Add a topic: add {id:'newid',name:'Name shown'} to "topics", then add questions with topic:'newid'.

Check your edits:  node validate.js banks/<id>.js   (checks structure, 4 distinct options, topic ids, duplicates, and flags years / exam-source words)

Add a figure (diagram) to a question
  1. Put the picture in the "img" folder (SVG is best; PNG/JPG also work). Name it after the question id, e.g. img/n5-organic-13.svg.
  2. Add this after q:'...' in the question:  figure:{src:'img/n5-organic-13.svg',alt:'Describe what the picture shows, without giving away the answer.'}
     Optional caption:  figure:{src:'...',alt:'...',caption:'Figure 1'}
  3. node validate.js banks/<id>.js  checks the file exists and the alt text is present.
  All figures must be original (drawn for this site), never copied from past papers or textbooks.
