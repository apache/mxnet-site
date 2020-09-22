

``mx.nd.random.uniform``
================================================

Description
----------------------

Draw random samples from a uniform distribution.


.. note:: The existing alias ``uniform`` is deprecated.

Samples are uniformly distributed over the half-open interval *[low, high)*
(includes *low*, but excludes *high*).


**Example**::

	 
	 uniform(low=0, high=1, shape=(2,2)) = [[ 0.60276335,  0.85794562],
	 [ 0.54488319,  0.84725171]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``low``                                | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Lower bound of the distribution.                           |
+----------------------------------------+------------------------------------------------------------+
| ``high``                               | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Upper bound of the distribution.                           |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=None.                      |
|                                        |                                                            |
|                                        | Shape of the output.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Context of output, in format [cpu|gpu|cpu_pinned](n). Only |
|                                        | used for imperative                                        |
|                                        | calls.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'None', 'float16', 'float32', 'float64'},optional,        |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | DType of the output in case this can't be inferred.        |
|                                        | Defaults to float32 if not defined                         |
|                                        | (dtype=None).                                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/sample_op.cc#L96

