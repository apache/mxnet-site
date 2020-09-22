

``mx.profiler.config``
============================================

Description
----------------------

Set up the configuration of profiler.

Usage
----------

.. code:: r

	mx.profiler.config(params)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``flags``                              | list of key/value pair tuples. Indicates configuration     |
|                                        | parameters                                                 |
|                                        | profile_symbolic : boolean, whether to profile symbolic    |
|                                        | operators                                                  |
|                                        | profile_imperative : boolean, whether to profile           |
|                                        | imperative                                                 |
|                                        | operators                                                  |
|                                        | profile_memory : boolean, whether to profile memory usage  |
|                                        | profile_api : boolean, whether to profile the C API        |
|                                        | file_name : string, output file for profile data           |
|                                        | continuous_dump : boolean, whether to periodically dump    |
|                                        | profiling data to                                          |
|                                        | file                                                       |
|                                        | dump_period : float, seconds between profile data dumps    |
+----------------------------------------+------------------------------------------------------------+



