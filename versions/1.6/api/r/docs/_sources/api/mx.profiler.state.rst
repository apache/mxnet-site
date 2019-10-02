

``mx.profiler.state``
==========================================

Description
----------------------

Set up the profiler state to record operator.

Usage
----------

.. code:: r

	mx.profiler.state(state = MX.PROF.STATE$STOP)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``state``                              | Indicting whether to run the profiler, can be              |
|                                        | 'MX.PROF.STATE$RUN' or 'MX.PROF.STATE$STOP'. Default is    |
|                                        | `MX.PROF.STATE$STOP`.                                      |
+----------------------------------------+------------------------------------------------------------+
| ``filename``                           | The name of output trace file. Default is 'profile.json'   |
+----------------------------------------+------------------------------------------------------------+



