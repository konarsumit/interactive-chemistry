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
