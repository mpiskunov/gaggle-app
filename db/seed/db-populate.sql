INSERT INTO public.gaggle_users(
	id, first_name, last_name, email, external_user_id, created_by, avatar)
	VALUES ('60564d85-f3d2-4dd8-b3e6-098495888d52', 'Gaggle', 'System', 'gaggle-system@golfgaggle.com', 'no-external-id', '00000000-0000-0000-0000-000000000000', null);
	
INSERT INTO public.courses(name, description, address, created_by)
	VALUES 
	('Country View', 'Conveniently located off Route 7 in Burriville, Rhode Island, Country View Golf Club is a beautifully maintained public golf course, offering a challenging and fun experience that will appeal to golfers of all levels. Country View Golf Club has been a favorite of the Blackstone Valley area for over 40 years and is known as the best value public course in Northern Rhode Island.', '49 Club Ln, Harrisville, RI 02830', '60564d85-f3d2-4dd8-b3e6-098495888d52'),
	('Chemawa', 'Now in its second generation of family ownership, Chemawa provides golfers with a friendly atmosphere surrounding an exquisitely maintained course. If you are looking for a friendly home course with beautifully maintained greens and fairways and an accommodating staff, Chemawa is the course for you!', '350 Cushman Rd, North Attleborough, MA 02760', '60564d85-f3d2-4dd8-b3e6-098495888d52'),
	('Crystal Lake', 'Opened by the Bliss Family in May 2004, Crystal Lake golf club is located on Route 102 in Burrillville. Our 23,000-square-foot facility offers a wide range of amenities. The main floor features our elegant Wisteria Room which holds up to 60 guests, the Waterfront Ballroom, seating up to 225 guests, and the Tavern, (our onsite restaurant, open to the public) all showcasing spectacular views of Crystal Lake and our 18th green. ', '100 Broncos Hwy, Mapleville, RI 02839', '60564d85-f3d2-4dd8-b3e6-098495888d52'),
	('Cranston Country Club', 'A great golf course makes the difference between a good game and a memorable one. Our championship 18-hole course, designed by Geoffrey Cornish, turns an everyday round of golf into an memorable golfing experience.', '69 Burlingame Rd, Cranston, RI 02921', '60564d85-f3d2-4dd8-b3e6-098495888d52'),
	('CT National', 'Our experience and reputation assures you and your friends a memorable golf experience. Our facility includes a visually stunning and enjoyable 18 hole golf course, two short game areas, driving range, and a restaurant and bar that serves beer, wine and spirits.', '136 Chase Rd, Putnam, CT 06260', '60564d85-f3d2-4dd8-b3e6-098495888d52')
	;
	
INSERT INTO public.tournaments(name, year, description, created_by, winner_id, code)
	VALUES ('Golf Gaggle 2025', '2025', 'This tournament is the Golf Gaggle 2025!', '60564d85-f3d2-4dd8-b3e6-098495888d52', null, 'GG2025');

INSERT INTO public.tournament_courses(created_by, tournament_id, course_id, winner_id, "order")
	VALUES 
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.tournaments LIMIT 1), (SELECT id FROM public.courses WHERE name = 'Country View'), null, '1'),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.tournaments LIMIT 1), (SELECT id FROM public.courses WHERE name = 'Chemawa'), null, '2'),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.tournaments LIMIT 1), (SELECT id FROM public.courses WHERE name = 'Crystal Lake'), null, '3'),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.tournaments LIMIT 1), (SELECT id FROM public.courses WHERE name = 'Cranston Country Club'), null, '4'),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.tournaments LIMIT 1), (SELECT id FROM public.courses WHERE name = 'CT National'), null, '5')
	;


INSERT INTO public.tournament_course_rounds(
	created_by, course_id, tournament_course_id, course_round_number, number_of_holes, tournament_round_number, start_date, end_date, tournament_id)
	VALUES 
	('60564d85-f3d2-4dd8-b3e6-098495888d52',  (SELECT id FROM public.courses WHERE name = 'Country View'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 1), 1, 18, 1, '5-31-2025', '6-14-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Chemawa'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 2), 1, 9, 2, '6-7-2025', '6-21-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Chemawa'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 2), 2, 9, 3, '6-14-2025', '6-28-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Crystal Lake'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 3), 1, 9, 4, '6-21-2025', '7-5-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Crystal Lake'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 3), 2, 9, 5, '6-28-2025', '7-12-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Cranston Country Club'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 4), 1, 9, 6, '7-5-2025', '7-19-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'Cranston Country Club'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 4), 2, 9, 7, '7-12-2025', '7-26-2025', (SELECT id FROM public.tournaments LIMIT 1)),
	('60564d85-f3d2-4dd8-b3e6-098495888d52', (SELECT id FROM public.courses WHERE name = 'CT National'), (SELECT id FROM public.tournament_courses WHERE tournament_id = (SELECT id FROM public.tournaments LIMIT 1) AND "order" = 5), 1, 9, 8, '7-12-2025', '7-26-2025', (SELECT id FROM public.tournaments LIMIT 1))
	;