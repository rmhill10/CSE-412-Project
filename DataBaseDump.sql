--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: computer_part; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.computer_part (
    itemid integer NOT NULL,
    itemname character varying(150) NOT NULL
);


ALTER TABLE public.computer_part OWNER TO postgres;

--
-- Name: cpu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cpu (
    itemid integer NOT NULL,
    cores integer NOT NULL,
    clock real NOT NULL,
    model character varying(50) NOT NULL
);


ALTER TABLE public.cpu OWNER TO postgres;

--
-- Name: gpu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gpu (
    itemid integer NOT NULL,
    power integer NOT NULL,
    vram real NOT NULL,
    gpu_chip character varying(50) NOT NULL,
    memory_clock integer NOT NULL
);


ALTER TABLE public.gpu OWNER TO postgres;

--
-- Name: makes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.makes (
    itemid integer NOT NULL,
    mid integer NOT NULL
);


ALTER TABLE public.makes OWNER TO postgres;

--
-- Name: manufacturer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manufacturer (
    mid integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.manufacturer OWNER TO postgres;

--
-- Name: ram; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ram (
    itemid integer NOT NULL,
    capacity integer NOT NULL,
    clock_frequency integer NOT NULL,
    type character varying(50) NOT NULL
);


ALTER TABLE public.ram OWNER TO postgres;

--
-- Name: sells; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sells (
    itemid integer NOT NULL,
    weburl character varying(100) NOT NULL,
    price real NOT NULL
);


ALTER TABLE public.sells OWNER TO postgres;

--
-- Name: website; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.website (
    weburl character varying(100) NOT NULL,
    companyname character varying(100) NOT NULL
);


ALTER TABLE public.website OWNER TO postgres;

--
-- Data for Name: computer_part; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.computer_part (itemid, itemname) FROM stdin;
201	Ryzen 7 3700X
202	Ryzen 5 3600
203	Ryzen 9 3950X
204	Ryzen 7 2700X
205	Ryzen 5 2600
206	Ryzen 7 3800X
207	Ryzen 5 1600
208	Ryzen 9 3900X
209	Ryzen 5 1600X
210	Ryzen 5 2600X
211	Ryzen 7 1700
212	Ryzen 7 1700X
213	Ryzen 5 3400G
214	Ryzen 7 2700
215	Ryzen 5 3600X
216	Ryzen 7 1800X
217	Ryzen 5 1600
218	FX-8350
219	Ryzen 3 1200
220	Ryzen 3 2200G
221	Ryzen 3 2200X
222	Ryzen 5 2400G
223	Ryzen 5 1400
224	Ryzen 5 1500X
225	Threadripper 1950X
226	Threadripper 2950X
227	Threadripper 1920X
228	Threadripper 2990WX
229	Ryzen 5 3600XT
230	Threadripper 3970X
231	Threadripper 3960X
232	Threadripper 3990X
101	AMD 100-505821
102	AMD 100-505841
103	AMD 100-505837
104	AMD 100-506001
105	AMD 100-505860
106	AMD 100-505999
107	AMD 100-505817
108	AMD 100-506115
109	AMD 100-505846
110	AMD 100-505838
111	AMD RADEON PRO WX 4100
112	AMD RADEON PRO WX 5100
113	AMD 100-505724
114	AMD 100-506095
115	AMD RADEON PRO WX 7100
116	AMD 100-506085
117	AMD 100-505956
118	AMD 100-505859
119	AMD 100-505856
120	AMD 100-505957
121	AMD Frontier Edition Liquid
122	AMD 100-506163
123	AMD 100-505725
124	AMD 100-506048
233	Intel Core i7-9700K
234	Intel Core i7-10700K
235	Intel Core i9-10900K
236	Intel Core i9-9900K
237	Intel Core i5-9600K
238	Intel Core i3-9100F
239	Intel Core i5-10600K
241	Intel Core i5-10400
242	Intel Core i9-10850K
243	Intel Core i3-10100
244	Intel Core i7-8700K
245	Intel Core i7-10700
246	Intel Core i5-9400
247	Intel Core i9-10980XE
248	Intel Core i5-10600KF
249	Intel Core i9-9900
250	Intel Core i9-9980XE
251	Intel Core i7-9700KF
252	Intel Core i9-10900
125	Gigabyte GeForce RTX 2070 SUPER 8 GB WINDFORCE OC 3X Video Card
126	Gigabyte GeForce RTX 2070 SUPER 8 GB GAMING OC 3X Video Card
127	MSI GeForce RTX 2060 6 GB GAMING Z Video Card
128	Asus GeForce RTX 2060 6 GB STRIX GAMING OC Video Card
129	EVGA GeForce RTX 2060 6 GB KO GAMING Video Card
130	MSI GeForce RTX 2060 SUPER 8 GB GAMING X Video Card
131	Zotac GeForce RTX 2060 SUPER 8 GB MINI Video Card
132	Gigabyte GeForce RTX 2060 SUPER 8 GB WINDFORCE OC Video Card
133	EVGA GeForce RTX 2070 8 GB XC ULTRA GAMING Video Card
134	Asus GeForce RTX 2070 8 GB STRIX GAMING OC Video Card
135	Gigabyte GeForce RTX 2070 SUPER 8 GB GAMING OC 3X Video Card
136	Asus GeForce RTX 2070 SUPER 8 GB STRIX GAMING Advanced Video Card
137	EVGA GeForce RTX 2070 SUPER 8 GB FTW3 ULTRA GAMING Video Card
138	EVGA GeForce RTX 2080 8 GB XC ULTRA GAMING Video Card
139	MSI GeForce RTX 2080 8 GB GAMING X TRIO Video Card
140	EVGA GeForce RTX 2080 SUPER 8 GB XC GAMING Video Card
141	MSI GeForce RTX 2080 SUPER 8 GB GAMING X TRIO Video Card
142	Asus GeForce RTX 2080 SUPER 8 GB STRIX GAMING Advanced Video Card
143	MSI GeForce RTX 2080 Ti 11 GB GAMING X TRIO Video Card
144	Asus GeForce RTX 2080 Ti 11 GB ROG Strix Gaming OC Video Card
145	EVGA GeForce RTX 2080 Ti 11 GB Black Video Card
146	NVIDIA GeForce RTX 3080 10 GB Founders Edition Video Card
147	EVGA GeForce RTX 3080 10 GB FTW3 ULTRA GAMING Video Card
148	EVGA GeForce RTX 3080 10 GB XC3 ULTRA GAMING Video Card
149	Zotac GeForce RTX 3080 10 GB GAMING Trinity Video Card
150	NVIDIA GeForce RTX 3090 24 GB Founders Edition Video Card
151	EVGA GeForce RTX 3090 24 GB FTW3 GAMING Video Card
152	EVGA GeForce RTX 3090 24 GB XC3 ULTRA GAMING Video Card
153	Asus GeForce RTX 3090 24 GB STRIX GAMING OC Video Card
301	Crucial 8GB Single DDR4 2400 (PC4 19200) 260-Pin SODIMM Memory - CT8G4SFS824A
302	Crucial 16GB Single DDR4 2400 MT/s (PC4-19200) DR x8 SODIMM 260-Pin for Mac - CT16G4S24AM
303	SAMSUNG 8GB 240-Pin DDR3 SDRAM ECC Registered DDR3 1333 Server Memory Model M393B1K70CH0-YH9
304	SAMSUNG 16GB 240-Pin DDR3 SDRAM ECC Registered DDR3 1600 (PC3 12800) Server Memory Model M393B2G70DB0-YK0
305	Corsair Vengeance LPX 8GB (1 x 8GB) DDR4 DRAM 2400MHz C16 (PC4-19200) Memory Kit - , Vengeance LPX Black
306	CORSAIR Vengeance LPX 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3600 (PC4 28800) Intel XMP 2.0 Desktop Memory Model CMK16GX4M2D3600C18
307	Crucial 1GB 240-Pin DDR2 SDRAM DDR2 800 (PC2 6400) Desktop Memory Model CT12864AA800
308	Crucial Technology CT25664AA800 2 GB 240-pin DIMM DDR2 PC2-6400 Memory Module
309	Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3000MHz C15 LED Desktop Memory - Black, Model:CMW16GX4M2C3000C15
310	Corsair Vengeance SODIMM 32GB (4x8GB) DDR4-4000 (PC4-32000) CL19 for Intel X299 Systems - CMSX32GX4M4X4000C19
\.


--
-- Data for Name: cpu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cpu (itemid, cores, clock, model) FROM stdin;
201	8	3.6	Ryzen 7 3700X
202	6	3.6	Ryzen 5 3600
203	16	3.5	Ryzen 9 3950X
204	8	3.7	Ryzen 7 2700X
205	6	3.4	Ryzen 5 2600
206	8	3.9	Ryzen 7 3800X
207	6	3.2	Ryzen 5 1600
208	12	3.8	Ryzen 9 3900X
209	6	3.6	Ryzen 5 1600X
210	6	3.6	Ryzen 5 2600X
211	8	3	Ryzen 7 1700
212	8	3.4	Ryzen 7 1700X
213	4	3.7	Ryzen 5 3400G
214	8	3.2	Ryzen 7 2700
215	4	3.7	Ryzen 5 3600X
216	8	3.6	Ryzen 7 1800X
217	6	3.2	Ryzen 5 1600
218	8	4	FX-8350
219	4	3.1	Ryzen 3 1200
220	4	3.5	Ryzen 3 2200G
221	4	3.5	Ryzen 3 2200X
222	4	3.6	Ryzen 5 2400G
223	4	3.2	Ryzen 5 1400
224	4	3.5	Ryzen 5 1500X
225	16	3.4	Threadripper 1950X
226	16	3.5	Threadripper 2950X
227	12	3.5	Threadripper 1920X
228	32	3	Threadripper 2990WX
229	6	3.8	Ryzen 5 3600XT
230	32	3.7	Threadripper 3970X
231	24	3.8	Threadripper 3960X
232	64	2.9	Threadripper 3990X
233	8	3.6	Intel Core i7-9700K
234	8	3.8	Intel Core i7-10700K
235	10	3.7	Intel Core i9-10900K
236	8	3.6	Intel Core i9-9900K
237	6	3.7	Intel Core i5-9600K
238	4	3.6	Intel Core i3-9100F
239	6	4.1	Intel Core i5-10600K
241	6	2.9	Intel Core i5-10400
242	10	3.6	Intel Core i9-10850K
243	4	3.6	Intel Core i3-10100
244	6	3.7	Intel Core i7-8700K
245	8	2.9	Intel Core i7-10700
246	6	2.9	Intel Core i5-9400
247	18	3	Intel Core i9-10980XE
248	6	4.1	Intel Core i5-10600KF
249	8	3.1	Intel Core i9-9900
250	18	3	Intel Core i9-9980XE
251	8	3.6	Intel Core i7-9700KF
252	10	2.8	Intel Core i9-10900
\.


--
-- Data for Name: gpu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gpu (itemid, power, vram, gpu_chip, memory_clock) FROM stdin;
101	26	2	FirePro W2100	630
102	32	0.5	FirePro 2450	600
103	15	0.5	FirePro 2270	600
104	65	2	Radeon Pro WX 2100	925
105	50	1	FirePro V3900	650
106	65	2	Radeon Pro WX 3100	925
107	50	2	FirePro W4100	630
108	50	4	Radeon Pro WX 3200	1250
109	150	2	FirePro V7900 SDI	725
110	75	2	FirePro W5000	825
111	50	4	Radeon Pro WX 4100	925
112	75	8	Radeon Pro WX 5100	926
113	150	8	FirePro W7100	824
114	125	8	Radeon Pro W5500	1354
115	150	8	Radeon Pro WX 7100	900
116	205	8	Radeon Pro W5700	1243
117	230	8	Radeon Pro WX 8200	1200
118	274	6	FirePro W90000	975
119	150	4	FirePro S7000	950
120	300	16	Radeon Pro WX 9100	1200
121	374	16	Vega Frontier Edition Liquid	1500
122	250	16	Radeon Pro VII	1400
123	275	16	FirePro W9100	930
124	250	32	Radeon Pro Duo Polaris	1243
125	215	8	GeForce RTX 2070 SUPER	1605
126	215	8	GeForce RTX 2070 SUPER	1605
127	160	6	GeForce RTX 2060	1365
128	160	6	GeForce RTX 2060	1365
129	160	6	GeForce RTX 2060	1365
130	175	8	GeForce RTX 2060 SUPER	1470
131	175	8	GeForce RTX 2060 SUPER	1470
132	175	8	GeForce RTX 2060 SUPER	1470
133	195	8	GeForce RTX 2070	1410
134	185	8	GeForce RTX 2070	1410
135	215	8	GeForce RTX 2070 SUPER	1605
136	215	8	GeForce RTX 2070 SUPER	1635
137	215	8	GeForce RTX 2070 SUPER	1605
138	215	8	GeForce RTX 2080	1515
139	215	8	GeForce RTX 2080	1515
140	250	8	GeForce RTX 2080 SUPER	1650
141	250	8	GeForce RTX 2080 SUPER	1650
142	250	8	GeForce RTX 2080 SUPER	1650
143	250	11	GeForce RTX 2080 Ti	1350
144	250	11	GeForce RTX 2080 Ti	1350
145	250	11	GeForce RTX 2080 Ti	1350
146	320	10	GeForce RTX 3080	1440
147	320	10	GeForce RTX 3080	1440
148	320	10	GeForce RTX 3080	1440
149	320	10	GeForce RTX 3080	1440
150	350	24	GeForce RTX 3090	1395
151	350	24	GeForce RTX 3090	1400
152	350	24	GeForce RTX 3090	1400
153	350	24	GeForce RTX 3090	1400
\.


--
-- Data for Name: makes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.makes (itemid, mid) FROM stdin;
201	2
202	2
203	2
204	2
205	2
206	2
207	2
208	2
209	2
210	2
211	2
212	2
213	2
214	2
215	2
216	2
217	2
218	2
219	2
220	2
221	2
222	2
223	2
224	2
225	2
226	2
227	2
228	2
229	2
230	2
231	2
232	2
101	2
102	2
103	2
104	2
105	2
106	2
107	2
108	2
109	2
110	2
111	2
112	2
113	2
114	2
115	2
116	2
117	2
118	2
119	2
120	2
121	2
122	2
123	2
124	2
233	1
234	1
235	1
236	1
237	1
238	1
239	1
241	1
242	1
243	1
244	1
245	1
246	1
247	1
248	1
249	1
250	1
251	1
252	1
125	4
126	4
127	5
128	6
129	7
130	5
131	8
132	4
133	7
134	6
135	4
136	6
137	7
138	7
139	5
140	7
141	5
142	6
143	5
144	6
145	7
146	3
147	7
148	7
149	8
150	3
151	7
152	7
153	7
301	9
302	9
303	10
304	10
305	11
306	11
307	9
308	9
309	11
310	11
\.


--
-- Data for Name: manufacturer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manufacturer (mid, name) FROM stdin;
1	INTEL
2	AMD
3	NVIDIA
4	Gigabyte
5	MSI
6	Asus
7	EVGA
8	Zotac
9	Crucial
10	Samsung
11	Corsair
\.


--
-- Data for Name: ram; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ram (itemid, capacity, clock_frequency, type) FROM stdin;
301	8	2133	DDR4 SO-DIMM
302	16	2400	DDR4 SO-DIMM
303	8	1133	DDR3 SDRAM
304	16	1600	DDR3 SDRAM
305	8	2400	DDR4 DRAM
306	16	3200	DDR4 DRAM
307	1	800	DDR2-800 UDIMM
308	2	800	DDR2-800 UDIMM
309	16	3000	DDR4 DRAM
310	32	4000	DDR4 DRAM
\.


--
-- Data for Name: sells; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sells (itemid, weburl, price) FROM stdin;
201	http://www.amazon.com	294.99
201	http://www.walmart.com	294.99
201	http://www.newegg.com	324.89
202	http://www.amazon.com	199.99
202	http://www.bestbuy.com	199.99
202	http://www.newegg.com	199.99
203	http://www.amazon.com	709.99
203	http://www.walmart.com	709.99
203	http://www.newegg.com	719.99
204	http://www.amazon.com	215.95
204	http://www.newegg.com	214.99
205	http://www.amazon.com	149.99
205	http://www.newegg.com	149.99
206	http://www.amazon.com	339.99
206	http://www.walmart.com	339.99
206	http://www.newegg.com	349.99
207	http://www.amazon.com	199.99
208	http://www.amazon.com	429.99
208	http://www.walmart.com	429.99
208	http://www.newegg.com	439.99
209	http://www.amazon.com	238.51
210	http://www.amazon.com	166.89
210	http://www.newegg.com	169.99
211	http://www.amazon.com	329
212	http://www.amazon.com	199.99
213	http://www.amazon.com	139.99
213	http://www.bestbuy.com	147.99
213	http://www.newegg.com	139.99
214	http://www.amazon.com	333.51
215	http://www.amazon.com	209.09
215	http://www.walmart.com	209.09
215	http://www.newegg.com	259.98
216	http://www.amazon.com	604.86
217	http://www.amazon.com	199.99
218	http://www.amazon.com	380.45
219	http://www.amazon.com	188.95
220	http://www.amazon.com	166.92
221	http://www.amazon.com	92.99
221	http://www.bestbuy.com	92.99
221	http://www.newegg.com	92.99
222	http://www.amazon.com	267
223	http://www.amazon.com	318.83
225	http://www.amazon.com	930.05
226	http://www.amazon.com	599
227	http://www.amazon.com	604.96
228	http://www.amazon.com	1406.49
228	http://www.walmart.com	1449.99
229	http://www.amazon.com	244.89
229	http://www.walmart.com	244.89
229	http://www.newegg.com	239.58
230	http://www.amazon.com	1949.99
230	http://www.walmart.com	1949.99
230	http://www.newegg.com	2099.99
231	http://www.amazon.com	1349.98
231	http://www.walmart.com	1349.98
231	http://www.bestbuy.com	1399
232	http://www.amazon.com	3975.95
232	http://www.walmart.com	3990
232	http://www.bestbuy.com	3989.99
101	http://www.amazon.com	76.98
102	http://www.amazon.com	98.99
103	http://www.amazon.com	98.99
104	http://www.bhphotovideo.com	129.99
104	http://www.staples.com	150.99
104	http://www.amazon.com	154.99
105	http://www.amazon.com	133.03
106	http://www.walmart.com	163.98
106	http://www.bhphotovideo.com	164.99
106	http://www.newegg.com	164.99
106	http://www.amazon.com	165.98
107	http://www.amazon.com	175.31
108	http://www.amazon.com	182.87
108	http://www.newegg.com	188.99
108	http://www.bhphotovideo.com	189.99
109	http://www.amazon.com	229.85
110	http://www.amazon.com	239
111	http://www.bhphotovideo.com	249.99
111	http://www.newegg.com	249.99
111	http://www.amazon.com	254.83
111	http://www.memoryc.com	295.81
111	http://www.walmart.com	331.68
112	http://www.bhphotovideo.com	334.99
112	http://www.newegg.com	334.99
112	http://www.amazon.com	346.15
112	http://www.memoryc.com	382.7
112	http://www.walmart.com	408.64
112	http://www.staples.com	410.99
113	http://www.amazon.com	360.99
114	http://www.bhphotovideo.com	399
114	http://www.newegg.com	408.99
114	http://www.amazon.com	433.35
115	http://www.newegg.com	460.99
115	http://www.amazon.com	480.7
115	http://www.bhphotovideo.com	499.99
115	http://www.memoryc.com	551.81
115	http://www.walmart.com	572.94
116	http://www.walmart.com	798.99
116	http://www.bhphotovideo.com	799
116	http://www.newegg.com	799.99
116	http://www.macsales.com	828.99
116	http://www.memoryc.com	942.23
117	http://www.bhphotovideo.com	969.99
117	http://www.newegg.com	969.99
117	http://www.amazon.com	975.3
118	http://www.amazon.com	1026.71
119	http://www.bhphotovideo.com	1218.5
120	http://www.amazon.com	1499
120	http://www.adorama.com	1509
120	http://www.newegg.com	1534.99
120	http://www.walmart.com	1559.73
120	http://www.bhphotovideo.com	1599
120	http://www.staples.com	1846.99
120	http://www.memoryc.com	2057.89
121	http://www.bhphotovideo.com	1699.89
122	http://www.bhphotovideo.com	1899
123	http://www.amazon.com	1991
124	http://www.amazon.com	2390
233	http://www.amazon.com	325.99
233	http://www.bestbuy.com	299.99
233	http://www.newegg.com	299.98
234	http://www.amazon.com	389
234	http://www.bestbuy.com	379.99
234	http://www.newegg.com	379.99
235	http://www.bestbuy.com	529.99
235	http://www.amazon.com	664.97
235	http://www.newegg.com	699.99
236	http://www.bestbuy.com	399.99
236	http://www.amazon.com	418.88
237	http://www.newegg.com	199.99
237	http://www.bestbuy.com	199.99
237	http://www.amazon.com	199.99
238	http://www.newegg.com	72.99
238	http://www.bestbuy.com	109.99
238	http://www.amazon.com	72.98
239	http://www.newegg.com	279.94
239	http://www.bestbuy.com	279.99
239	http://www.amazon.com	274.89
241	http://www.newegg.com	179.98
241	http://www.bestbuy.com	189.99
241	http://www.amazon.com	179.98
242	http://www.newegg.com	484.97
242	http://www.bestbuy.com	484.99
242	http://www.amazon.com	484.47
243	http://www.newegg.com	115.99
243	http://www.bestbuy.com	119.99
243	http://www.amazon.com	114.99
244	http://www.newegg.com	391.99
244	http://www.bestbuy.com	414.99
244	http://www.amazon.com	299.99
245	http://www.bestbuy.com	289.99
245	http://www.amazon.com	338.99
245	http://www.newegg.com	319.99
246	http://www.bestbuy.com	189.99
246	http://www.amazon.com	164.6
246	http://www.newegg.com	169.99
247	http://www.bestbuy.com	999.99
247	http://www.amazon.com	817.5
247	http://www.bhphotovideo.com	1059.99
248	http://www.amazon.com	365.91
248	http://www.bhphotovideo.com	277.5
248	http://www.adorama.com	277.5
249	http://www.amazon.com	414.99
249	http://www.bhphotovideo.com	469.99
249	http://www.adorama.com	469.99
250	http://www.adorama.com	2248.75
250	http://www.walmart.com	1753.15
250	http://www.amazon.com	1118.81
251	http://www.adorama.com	421.25
251	http://www.bhphotovideo.com	319.99
251	http://www.amazon.com	319
252	http://www.adorama.com	469.79
252	http://www.bhphotovideo.com	469.79
252	http://www.amazon.com	469
125	http://www.amazon.com	499.99
125	http://www.newegg.com	499.99
126	http://www.amazon.com	699.99
126	http://www.memoryc.com	625.89
127	http://www.bhphotovideo.com	352.67
127	http://www.newegg.com	352.67
127	http://www.walmart.com	369.99
127	http://www.adorama.com	379.99
127	http://www.memoryc.com	459.81
127	http://www.officedepot.com	464.94
128	http://www.amazon.com	599.99
129	http://www.amazon.com	309.99
129	http://www.newegg.com	313.98
130	http://www.adorama.com	499.99
130	http://www.staples.com	459.99
130	http://www.amazon.com	499
131	http://www.amazon.com	419.99
131	http://www.memoryc.com	419.99
131	http://www.newegg.com	419.99
132	http://www.newegg.com	399.99
132	http://www.amazon.com	599.99
133	http://www.amazon.com	759.95
134	http://www.memoryc.com	634.01
134	http://www.amazon.com	877.99
135	http://www.memoryc.com	625.89
135	http://www.amazon.com	699.99
136	http://www.amazon.com	763.99
137	http://www.newegg.com	599.99
137	http://www.staples.com	619.99
137	http://www.adorama.com	634.99
138	http://www.amazon.com	1179.99
139	http://www.newegg.com	689.99
140	http://www.staples.com	779.99
140	http://www.amazon.com	1016.99
141	http://www.staples.com	869.99
141	http://www.amazon.com	949.11
142	http://www.staples.com	819.99
142	http://www.amazon.com	1399.99
143	http://www.newegg.com	1279.99
143	http://www.memoryc.com	1698.47
143	http://www.amazon.com	1849
144	http://www.bestbuy.com	1279.99
144	http://www.newegg.com	1299.99
144	http://www.amazon.com	2154
145	http://www.amazon.com	1999.99
146	http://www.bestbuy.com	699.99
147	http://www.bestbuy.com	809.99
147	http://www.newegg.com	816.98
147	http://www.adorama.com	820.49
148	http://www.bestbuy.com	769.99
148	http://www.adorama.com	780.99
149	http://www.newegg.com	726.98
150	http://www.bestbuy.com	1499.99
151	http://www.newegg.com	1626.99
151	http://www.adorama.com	1634.49
152	http://www.newegg.com	1626.98
152	http://www.adorama.com	1634.49
153	http://www.bestbuy.com	1799.99
301	http://www.newegg.com	29.99
301	http://www.amazon.com	29.95
302	http://www.newegg.com	57.64
302	http://www.amazon.com	57.95
303	http://www.newegg.com	21.45
303	http://www.amazon.com	21.98
304	http://www.newegg.com	33.78
304	http://www.amazon.com	40.99
305	http://www.amazon.com	32.99
305	http://www.corsair.com	32.99
306	http://www.newegg.com	62.99
306	http://www.bestbuy.com	59.99
306	http://www.amazon.com	68.99
307	http://www.crucial.com	14.49
307	http://www.newegg.com	8.5
308	http://www.crucial.com	28.49
308	http://www.amazon.com	18.99
308	http://www.newegg.com	7.85
309	http://www.amazon.com	82.99
309	http://www.corsair.com	85.99
309	http://www.newegg.com	82.99
309	http://www.bestbuy.com	85.99
310	http://www.corsair.com	459.99
310	http://www.amazon.com	419.99
\.


--
-- Data for Name: website; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.website (weburl, companyname) FROM stdin;
http://www.amazon.com	Amazon
http://www.walmart.com	Walmart
http://www.newegg.com	NewEgg
http://www.bestbuy.com	Best Buy
http://www.memoryc.com	memoryC
http://www.adorama.com	Adorama
http://www.officedepot.com	Office DEPOT
http://www.staples.com	Staples
http://www.bhphotovideo.com	B&H
http://www.macsales.com	MacSales
http://www.corsair.com	Corsair
http://www.crucial.com	Crucial
\.


--
-- Name: computer_part computer_part_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.computer_part
    ADD CONSTRAINT computer_part_pkey PRIMARY KEY (itemid);


--
-- Name: cpu cpu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpu
    ADD CONSTRAINT cpu_pkey PRIMARY KEY (itemid);


--
-- Name: gpu gpu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gpu
    ADD CONSTRAINT gpu_pkey PRIMARY KEY (itemid);


--
-- Name: makes makes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.makes
    ADD CONSTRAINT makes_pkey PRIMARY KEY (itemid, mid);


--
-- Name: manufacturer manufacturer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY (mid);


--
-- Name: ram ram_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram
    ADD CONSTRAINT ram_pkey PRIMARY KEY (itemid);


--
-- Name: sells sells_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sells
    ADD CONSTRAINT sells_pkey PRIMARY KEY (itemid, weburl);


--
-- Name: website website_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.website
    ADD CONSTRAINT website_pkey PRIMARY KEY (weburl);


--
-- Name: cpu cpu_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpu
    ADD CONSTRAINT cpu_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.computer_part(itemid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: gpu gpu_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gpu
    ADD CONSTRAINT gpu_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.computer_part(itemid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: makes makes_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.makes
    ADD CONSTRAINT makes_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.computer_part(itemid);


--
-- Name: makes makes_mid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.makes
    ADD CONSTRAINT makes_mid_fkey FOREIGN KEY (mid) REFERENCES public.manufacturer(mid);


--
-- Name: ram ram_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram
    ADD CONSTRAINT ram_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.computer_part(itemid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sells sells_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sells
    ADD CONSTRAINT sells_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.computer_part(itemid);


--
-- Name: sells sells_weburl_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sells
    ADD CONSTRAINT sells_weburl_fkey FOREIGN KEY (weburl) REFERENCES public.website(weburl);


--
-- PostgreSQL database dump complete
--

